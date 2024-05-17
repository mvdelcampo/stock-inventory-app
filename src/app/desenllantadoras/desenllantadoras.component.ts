import { Component } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-desenllantadoras',
  templateUrl: './desenllantadoras.component.html',
  styleUrl: './desenllantadoras.component.scss'
})
export class DesenllantadorasComponent {
  cantidadTotal: number = 0;
  desenllantadorasAgrupadas: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerDesenllantadorasAgrupadas();
    this.obtenerCantidadTotal();
  }

  obtenerDesenllantadorasAgrupadas() {
    this.desenllantadorasAgrupadas = this.service.obtenerElevadoresAgrupados();
  }
  obtenerCantidadTotal() {
    this.cantidadTotal = this.service.obtenerCantidadTotalElevadores();
  }
}
