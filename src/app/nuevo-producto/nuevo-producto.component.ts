import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.scss',
})
export class NuevoProductoComponent{
  productoForm: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: ProductosServicio) {
    this.productoForm = this.fb.group({
      Codigo: ['', Validators.required],
      Modelo: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Proveedor: ['', Validators.required],
    });
  }


  onSubmit(): void {
    console.log(this.productoForm.value);
    if (this.productoForm.valid) {
      this.service.crearProducto(this.productoForm.value).subscribe(
        response => {
          console.log('Producto cargado exitosamente', response);
          this.successMessage = 'Producto cargado exitosamente';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000); // Oculta el mensaje después de 3 segundos
          this.productoForm.reset();
        },
        error => {
          console.error('Error al crear el producto', error);
          // Aquí puedes agregar lógica adicional para manejar el error
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
