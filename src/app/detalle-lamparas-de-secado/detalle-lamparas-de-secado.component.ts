import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-lamparas-de-secado',
  templateUrl: './detalle-lamparas-de-secado.component.html',
  styleUrl: './detalle-lamparas-de-secado.component.scss'
})
export class DetalleLamparasDeSecadoComponent {
  modelo: string = "";
  detallesLamparas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || ''; // Si params.get('modelo') es null, asigna una cadena vacía
      this.obtenerDetallesLamparas();
    });
  }

  obtenerDetallesLamparas() {
    // Utiliza el servicio para obtener los detalles de los elevadores correspondientes al modelo
    this.detallesLamparas = this.service.obtenerDetallesElevadoresPorModelo(this.modelo);
  }
}
