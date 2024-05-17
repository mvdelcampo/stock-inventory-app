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
  detallesElevadores: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || ''; // Si params.get('modelo') es null, asigna una cadena vacía
      this.obtenerDetallesElevadores();
    });
  }

  obtenerDetallesElevadores() {
    // Utiliza el servicio para obtener los detalles de los elevadores correspondientes al modelo
    this.detallesElevadores = this.service.obtenerDetallesElevadoresPorModelo(this.modelo);
  }

}