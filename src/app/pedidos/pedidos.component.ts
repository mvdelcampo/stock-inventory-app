import { Component, OnInit } from '@angular/core';
import { PedidosServicio } from '../servicios/pedidos.service';

interface Producto {
  codigo: number;
  tipo: string;
  marca: string;
  modelo: string;
  ubicacion: string;
  proveedor: string;
  precio: number;
  estado: string;
}

interface Pedido {
  id: number;
  fecha: string;
  empresa: string;
  estado: string;
  precio: number;
  usuario: string;
  productos: Producto[];
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit{
  pedidos: Pedido[] = [];
  pedidoExpandidoId: number | null = null;

  constructor(private service: PedidosServicio) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.pedidos = this.service.obtenerPedidos();
    // console.log('Pedidos obtenidos:', this.pedidos);
  }

  toggleDetails(pedidoId: number): void {
    // Si el pedido actualmente expandido es el mismo que se acaba de hacer clic,
    // establecer pedidoExpandidoId a null (para contraerlo).
    // De lo contrario, establecer pedidoExpandidoId al ID del pedido que se hizo clic (para expandirlo).
    console.log('Toggling details for pedidoId:', pedidoId);
    console.log('Current pedidoExpandidoId:', this.pedidoExpandidoId);
    this.pedidoExpandidoId = this.pedidoExpandidoId === pedidoId ? null : pedidoId;
    console.log('New pedidoExpandidoId:', this.pedidoExpandidoId);
  }

}
