import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PedidosServicio } from '../servicios/pedidos.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss'],
})
export class NuevoPedidoComponent {
  pedidoForm: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  errorMessage: string = '';
  showErrorMessage: boolean = false;
  modelos: string[] = ['B400', 'B600', 'B890', 'C130', 'C400', 'D780','E200', 'E550', 'E680','L800', 'L780', 'L900']; // Agrega aquí tus modelos predefinidos

  constructor(private fb: FormBuilder, private service: PedidosServicio) {
    this.pedidoForm = this.fb.group({
      Codigo: ['', Validators.required],
      Empresa: ['', Validators.required],
      Productos: this.fb.array([]) // Array para los productos
    });
  }

  ngOnInit(): void {
    this.agregarProducto(); // Agregar un producto por defecto al inicializar
  }

  get productos(): FormArray {
    return this.pedidoForm.get('Productos') as FormArray;
  }

  agregarProducto(): void {
    this.productos.push(this.fb.group({
      Modelo: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.min(1)]]
    }));
  }

  eliminarProducto(index: number): void {
    this.productos.removeAt(index);
  }
  
  onSubmit(): void {
    console.log(this.pedidoForm.value);
    if (this.pedidoForm.valid) {
      this.service.crearPedido(this.pedidoForm.value).pipe(
        catchError(error => {
          console.error('Error al crear el producto', error);
          if (error.status === 400 && error.error) {
            this.errorMessage = error.error; // Asigna el mensaje de error al string del cuerpo
          } else {
            this.errorMessage = 'Error al crear el pedido';
          }
          return throwError(error);
        })
      ).subscribe(
        response => {
          if(response.statusCode === 400){
            this.errorMessage = response.body;
            this.showErrorMessage = true;
            console.log("Error al crear el pedido porque no hay stock");
          }else{
            this.successMessage = 'Pedido creado exitosamente';
            this.showSuccessMessage = true;
            console.log('Pedido creado exitosamente', response);
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000); // Oculta el mensaje después de 3 segundos
            this.pedidoForm.reset();
            this.productos.clear();
          }
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
