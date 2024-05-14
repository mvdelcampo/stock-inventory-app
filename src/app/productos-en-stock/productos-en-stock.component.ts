import { Component, OnInit } from '@angular/core';
import { StockTotalServicio } from '../servicios/stock-total.service';

@Component({
  selector: 'app-productos-en-stock',
  templateUrl: './productos-en-stock.component.html',
  styleUrl: './productos-en-stock.component.scss',
})
export class ProductosEnStockComponent implements OnInit {
  productosEnStock: any[] = [];

  constructor(private stockService: StockTotalServicio) {}

  ngOnInit(): void {
    this.obtenerProductosEnStock();
  }

  obtenerProductosEnStock() {
    this.productosEnStock = this.stockService.obtenerProductosEnStock();
  }

  // Método para reemplazar espacios por guiones y convertir a minúsculas
  convertirTipoParaRouterLink(tipo: string): string {
    if (tipo == 'Elevador') {
      return 'elevadores';
    } else if (tipo == 'Cabina de pintura') {
      return 'cabinas-de-pintura';
    } else if (tipo == 'Balanceadora') {
      return 'balanceadoras';
    } else if (tipo == 'Desenllantadora') {
      return 'desenllantadoras';
    } else if (tipo == 'Lámpara de secado') {
      return 'lamparas-de-secado';
    }
    return '';
  }
}
