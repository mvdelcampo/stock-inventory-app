import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-lamparas-de-secado',
  templateUrl: './lamparas-de-secado.component.html',
  styleUrl: './lamparas-de-secado.component.scss'
})
export class LamparasDeSecadoComponent implements OnInit {
  cantidadTotal: number = 0;
  lamparasAgrupadas: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerLamparasAgrupadas();
    this.obtenerCantidadTotal();
  }

  obtenerLamparasAgrupadas() {
    this.lamparasAgrupadas = this.service.obtenerElevadoresAgrupados();
  }
  obtenerCantidadTotal() {
    this.cantidadTotal = this.service.obtenerCantidadTotalElevadores();
  }
}
