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
    this.service.obtenerCantidadTotalProductos("Elevador").subscribe(
      total => {
        console.log('Total productos:', total);
        this.cantidadTotal = total;
      },
      error => {
        console.error('Error al obtener la cantidad total de productos', error);
      }
    );
  }

  obtenerElevadoresAgrupados(): void {
    this.service.obtenerProductosAgrupados("Elevador").subscribe(data => {
      this.elevadoresAgrupados = data;
      console.log(data);
    }, error => {
      console.error('Error al obtener los productos agrupados', error);
    });
  }

}
