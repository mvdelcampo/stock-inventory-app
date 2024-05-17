import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-cabinas-de-pintura',
  templateUrl: './cabinas-de-pintura.component.html',
  styleUrl: './cabinas-de-pintura.component.scss'
})
export class CabinasDePinturaComponent implements OnInit {
  cantidadTotal: number = 0;
  cabinasAgrupadas: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerCabinasAgrupadas();
    this.obtenerCantidadTotal();
  }

  obtenerCabinasAgrupadas() {
    this.cabinasAgrupadas = this.service.obtenerElevadoresAgrupados();
  }
  obtenerCantidadTotal() {
    this.cantidadTotal = this.service.obtenerCantidadTotalElevadores();
  }
}
