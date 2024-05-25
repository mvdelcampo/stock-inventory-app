import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-elevadores',
  templateUrl: './detalle-elevadores.component.html',
  styleUrl: './detalle-elevadores.component.scss'
})
export class DetalleElevadoresComponent implements OnInit {
  modelo: string = "";
  detallesElevadores: any[] = [] ;

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || "";
      this.obtenerDetallesElevadores(this.modelo);
    });
  }

  obtenerDetallesElevadores(modelo: string): void{
    this.service.obtenerDetallesProductosPorModelo(modelo).subscribe(
      (response) => {
        this.detallesElevadores = response;
        console.log(this.detallesElevadores);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }

}