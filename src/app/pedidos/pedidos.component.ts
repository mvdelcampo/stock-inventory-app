import { Component, OnInit } from '@angular/core';
import { PedidosServicio } from '../servicios/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit{
  pedidos: any[] = [];

  constructor(private service: PedidosServicio) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.pedidos = this.service.obtenerPedidos();
  }

}
