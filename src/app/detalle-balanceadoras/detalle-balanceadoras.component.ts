import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServicio } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-balanceadoras',
  templateUrl: './detalle-balanceadoras.component.html',
  styleUrl: './detalle-balanceadoras.component.scss'
})
export class DetalleBalanceadorasComponent implements OnInit{
  modelo: string = "";
  detallesBalanceadoras: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductosServicio
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelo = params.get('modelo') || "";
      this.obtenerDetallesBalanceadoras(this.modelo);
    });
  }

  obtenerDetallesBalanceadoras(modelo: string): void{
    this.service.obtenerDetallesProductosPorModelo(modelo).subscribe(data => {
      this.detallesBalanceadoras = data;
    }, error =>{
      console.error('Error al obtener los detalles de los productos', error);
    });
  }
}
