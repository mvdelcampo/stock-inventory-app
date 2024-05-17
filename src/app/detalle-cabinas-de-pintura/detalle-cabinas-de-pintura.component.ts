import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-cabinas-de-pintura',
  templateUrl: './detalle-cabinas-de-pintura.component.html',
  styleUrl: './detalle-cabinas-de-pintura.component.scss'
})
export class DetalleCabinasDePinturaComponent {
  modelo: string = "";
  detallesCabinas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || ''; // Si params.get('modelo') es null, asigna una cadena vacía
      this.obtenerDetallesCabinas();
    });
  }

  obtenerDetallesCabinas() {
    // Utiliza el servicio para obtener los detalles de los elevadores correspondientes al modelo
    this.detallesCabinas = this.service.obtenerDetallesElevadoresPorModelo(this.modelo);
  }
}
