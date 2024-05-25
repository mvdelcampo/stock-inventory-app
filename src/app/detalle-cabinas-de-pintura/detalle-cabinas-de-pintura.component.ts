import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-cabinas-de-pintura',
  templateUrl: './detalle-cabinas-de-pintura.component.html',
  styleUrl: './detalle-cabinas-de-pintura.component.scss'
})
export class DetalleCabinasDePinturaComponent implements OnInit{
  modelo: string = "";
  detallesCabinas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || "";
      this.obtenerDetallesCabinas(this.modelo);
    });
  }
  obtenerDetallesCabinas(modelo: string): void{
    this.service.obtenerDetallesProductosPorModelo(modelo).subscribe(
      (response) => {
        this.detallesCabinas = response;
        console.log(this.detallesCabinas);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }
}
