import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-elevadores',
  templateUrl: './elevadores.component.html',
  styleUrl: './elevadores.component.scss'
})
export class ElevadoresComponent implements OnInit {
  cantidadTotal: number = 0;
  elevadoresAgrupados: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerElevadoresAgrupados();
    this.obtenerCantidadTotal();
  }

  obtenerElevadoresAgrupados() {
    this.elevadoresAgrupados = this.service.obtenerElevadoresAgrupados();
  }
  obtenerCantidadTotal() {
    this.cantidadTotal = this.service.obtenerCantidadTotalElevadores();
  }

}
