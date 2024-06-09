import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-desenllantadoras',
  templateUrl: './desenllantadoras.component.html',
  styleUrl: './desenllantadoras.component.scss'
})
export class DesenllantadorasComponent implements OnInit{
  cantidadTotal: number = 0;
  desenllantadorasAgrupadas: any[] = [];

  constructor(private service: ProductosServicio) {}

  ngOnInit(): void {
    this.obtenerDesenllantadorasAgrupadas();
    this.service.obtenerCantidadTotalProductos("Desenllantadora").subscribe(
      total => {
        console.log('Total productos:', total);
        this.cantidadTotal = total;
      },
      error => {
        console.error('Error al obtener la cantidad total de productos', error);
      }
    );
  }

  obtenerDesenllantadorasAgrupadas(): void {
    this.service.obtenerProductosAgrupados("Desenllantadora").subscribe(data => {
      this.desenllantadorasAgrupadas = data.sort((a: { Cantidad: number; }, b: { Cantidad: number; }) => b.Cantidad - a.Cantidad);
      console.log(data);
    }, error => {
      console.error('Error al obtener los productos agrupados', error);
    });
  }
}
