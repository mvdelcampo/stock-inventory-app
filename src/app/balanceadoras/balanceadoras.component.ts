import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';
import { Observable } from 'rxjs';

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
    this.service.obtenerCantidadTotalProductos("Balanceadora").subscribe(
      total => {
        console.log('Total productos:', total);
        this.cantidadTotal = total;
      },
      error => {
        console.error('Error al obtener la cantidad total de productos', error);
      }
    );
  }

  obtenerBalanceadorasAgrupadas(): void {
    this.service.obtenerProductosAgrupados("Balanceadora").subscribe(data => {
      this.balanceadorasAgrupadas = data;
      console.log(data);
    }, error => {
      console.error('Error al obtener los productos agrupados', error);
    });
  }
}
