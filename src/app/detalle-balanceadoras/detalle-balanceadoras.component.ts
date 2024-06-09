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
  balanceadorasFiltradas = this.detallesBalanceadoras;
  filtroActivo: string = '';

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
      console.log("aca")
      console.log(this.detallesBalanceadoras)
      this.filtrarBalanceadoras('');
    }, error =>{
      console.error('Error al obtener los detalles de los productos', error);
    });
  }
  filtrarBalanceadoras(filtro: string): void {
    this.filtroActivo = filtro;
    if (this.filtroActivo) {
      this.balanceadorasFiltradas = this.detallesBalanceadoras.filter(producto => producto.Estado === this.filtroActivo);
    } else {
      this.balanceadorasFiltradas = this.detallesBalanceadoras;
    }
  }
}
