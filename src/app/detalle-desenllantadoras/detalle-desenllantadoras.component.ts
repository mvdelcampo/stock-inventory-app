import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-desenllantadoras',
  templateUrl: './detalle-desenllantadoras.component.html',
  styleUrl: './detalle-desenllantadoras.component.scss'
})
export class DetalleDesenllantadorasComponent implements OnInit{
  modelo: string = "";
  detallesDesenllantadoras: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || "";
      this.obtenerDetallesDesenllantadoras(this.modelo);
    });
  }
  obtenerDetallesDesenllantadoras(modelo: string): void{
    this.service.obtenerDetallesProductosPorModelo(modelo).subscribe(
      (response) => {
        this.detallesDesenllantadoras = response;
        console.log(this.detallesDesenllantadoras);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }
  
}
