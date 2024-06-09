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
    this.service.obtenerCantidadTotalProductos("Lampara de secado").subscribe(
      total => {
        console.log('Total productos:', total);
        this.cantidadTotal = total;
      },
      error => {
        console.error('Error al obtener la cantidad total de productos', error);
      }
    );
  }
  obtenerLamparasAgrupadas(): void {
    this.service.obtenerProductosAgrupados("Lampara de secado").subscribe(data => {
      this.lamparasAgrupadas = data.sort((a: { Cantidad: number; }, b: { Cantidad: number; }) => b.Cantidad - a.Cantidad);
      console.log(data);
    }, error => {
      console.error('Error al obtener los productos agrupados', error);
    });
  }

}
