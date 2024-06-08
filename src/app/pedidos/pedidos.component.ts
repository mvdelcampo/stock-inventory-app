import { Component, OnInit } from '@angular/core';
import { PedidosServicio } from '../servicios/pedidos.service';
import { APIService , ListPedidosQuery} from '../API.service';

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
  [x: string]: any;
  pedidos: Pedido[] = [];
  pedidoExpandidoId: number | null = null;

  constructor(private service: APIService) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  async obtenerPedidos() {
    try {
      const response = await this.service.ListPedidos();
      this.pedidos = [];
      const productos: Producto[] = [];
      const producto: Producto = {
        codigo: 0,
        tipo: "prueba",
        marca: "prueba1",
        modelo: "prueba2",
        ubicacion: "prueba3",
        proveedor: "prueba4",
        precio: 0,
        estado: "pueba5"
      };
      productos.push(producto);
      if (response.items) {
        for (const item of response.items) {
          if (item) {
            const pedido: Pedido = {
              id: item.Codigo,
              empresa: item.Empresa || "",
              estado: item.Estado || "",
              fecha: item.Fecha || "",
              precio: item.Precio || 0,
              productos: productos,
              usuario: '',
            };
            this.pedidos.push(pedido);
          }
        }
      }
      
      console.log('Pedidos obtenidos:', this.pedidos);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
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
