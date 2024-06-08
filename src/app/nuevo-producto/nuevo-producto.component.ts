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
          console.log('Producto creado exitosamente', response);
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir al usuario
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
