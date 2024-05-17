import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-desenllantadoras',
  templateUrl: './detalle-desenllantadoras.component.html',
  styleUrl: './detalle-desenllantadoras.component.scss'
})
export class DetalleDesenllantadorasComponent {
  modelo: string = "";
  detallesDesenllantadoras: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || ''; // Si params.get('modelo') es null, asigna una cadena vacía
      this.obtenerDetallesDesenllantadoras();
    });
  }

  obtenerDetallesDesenllantadoras() {
    // Utiliza el servicio para obtener los detalles de los elevadores correspondientes al modelo
    this.detallesDesenllantadoras = this.service.obtenerDetallesElevadoresPorModelo(this.modelo);
  }
}
