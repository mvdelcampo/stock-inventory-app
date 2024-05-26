import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.scss',
})
export class NuevoPedidoComponent {
  pedidoForm: FormGroup;
  codigosBarras: string[] = [];

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      fecha: ['', Validators.required],
      empresa: ['', Validators.required],
      estado: ['', Validators.required],
      productos: ['', Validators.required], // Inicialmente vacío
      // id: ['', Validators.required], autogenerado en la BD
      // precio: ['', [Validators.required, Validators.min(0)]], calcular, va a ser la suma de los precios de los productos, capaz mostrar esa suma en pantalla
      // usuario: ['', Validators.required], completado tomando el usuario activo
    });
  }

  agregarCodigoBarras(codigo: string): void {
    if (codigo.trim() !== '' && !this.codigosBarras.includes(codigo.trim())) {
      this.codigosBarras.push(codigo.trim());
      const productosControl = this.pedidoForm.get('productos');
      productosControl?.setValue([...productosControl.value, codigo.trim()]);
    }
  }

  eliminarCodigoBarras(codigo: string): void {
    const index = this.codigosBarras.indexOf(codigo);
    if (index !== -1) {
      this.codigosBarras.splice(index, 1);
      const productosControl = this.pedidoForm.get('productos');
      const newValue = productosControl?.value.filter(
        (value: string) => value !== codigo
      );
      productosControl?.setValue(newValue);
    }
  }

  onSubmit(): void {
    console.log(this.pedidoForm.value);
    // Lógica para enviar el formulario
  }
}
