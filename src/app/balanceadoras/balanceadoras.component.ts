import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-balanceadoras',
  templateUrl: './balanceadoras.component.html',
  styleUrl: './balanceadoras.component.scss'
})
export class BalanceadorasComponent implements OnInit{
  cantidadTotal: number = 0;
  balanceadorasAgrupadas: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerBalanceadorasAgrupadas();
    this.obtenerCantidadTotal();
  }

  obtenerBalanceadorasAgrupadas() {
    this.balanceadorasAgrupadas = this.service.obtenerElevadoresAgrupados();
  }
  obtenerCantidadTotal() {
    this.cantidadTotal = this.service.obtenerCantidadTotalElevadores(); 
  }
}
