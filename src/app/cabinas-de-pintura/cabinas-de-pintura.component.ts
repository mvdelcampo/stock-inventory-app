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
    this.service.obtenerCantidadTotalProductos("Cabina de pintura").subscribe(
      total => {
        console.log('Total productos:', total);
        this.cantidadTotal = total;
      },
      error => {
        console.error('Error al obtener la cantidad total de productos', error);
      }
    );
  }

  obtenerCabinasAgrupadas(): void {
    this.service.obtenerProductosAgrupados("Cabina de pintura").subscribe(data => {
      this.cabinasAgrupadas = data;
      console.log(data);
    }, error => {
      console.error('Error al obtener los productos agrupados', error);
    });
  }
}
