import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.scss',
})
export class NuevoProductoComponent{
  productoForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      codigo: ['', Validators.required],
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ubicacion: ['', Validators.required],
      proveedor: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
    });
  }


  onSubmit(): void {
    console.log(this.productoForm.value);
    // Lógica para enviar el formulario
  }
}
