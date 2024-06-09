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
  desenllantadorasFiltradas = this.detallesDesenllantadoras;
  filtroActivo: string = '';

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
        this.filtrarDesenllantadoras('');
        console.log(this.detallesDesenllantadoras);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }
  filtrarDesenllantadoras(filtro: string): void {
    this.filtroActivo = filtro;
    if (this.filtroActivo) {
      this.desenllantadorasFiltradas = this.detallesDesenllantadoras.filter(producto => producto.Estado === this.filtroActivo);
    } else {
      this.desenllantadorasFiltradas = this.detallesDesenllantadoras;
    }
  }
  
}
