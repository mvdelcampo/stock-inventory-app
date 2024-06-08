import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-lamparas-de-secado',
  templateUrl: './detalle-lamparas-de-secado.component.html',
  styleUrl: './detalle-lamparas-de-secado.component.scss'
})
export class DetalleLamparasDeSecadoComponent implements OnInit{
  modelo: string = "";
  detallesLamparas: any[] = [];
  lamparasFiltradas = this.detallesLamparas;

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || "";
      this.obtenerDetallesLamparas(this.modelo);
    });
  }

  obtenerDetallesLamparas(modelo: string): void{
    this.service.obtenerDetallesProductosPorModelo(modelo).subscribe(
      (response) => {
        this.detallesLamparas = response;
        console.log(this.detallesLamparas);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }

  filtrarLamparas(estado: string): void {
    if (estado) {
      this.lamparasFiltradas = this.detallesLamparas.filter(elemento => elemento.estado === estado);
    } else {
      this.lamparasFiltradas = this.detallesLamparas;
    }
  }

}


