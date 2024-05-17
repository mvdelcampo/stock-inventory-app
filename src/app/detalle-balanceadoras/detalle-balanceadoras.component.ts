import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-balanceadoras',
  templateUrl: './detalle-balanceadoras.component.html',
  styleUrl: './detalle-balanceadoras.component.scss'
})
export class DetalleBalanceadorasComponent {
  modelo: string = "";
  detallesBalanceadoras: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || ''; // Si params.get('modelo') es null, asigna una cadena vacía
      this.obtenerDetallesBalanceadoras();
    });
  }

  obtenerDetallesBalanceadoras() {
    // Utiliza el servicio para obtener los detalles de los elevadores correspondientes al modelo
    this.detallesBalanceadoras = this.service.obtenerDetallesElevadoresPorModelo(this.modelo);
  }
}
