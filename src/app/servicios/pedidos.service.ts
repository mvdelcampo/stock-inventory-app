import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosServicio {

  constructor() { }

  obtenerPedidos() { // cambiar por el servicio que busque todo segun el tipo
    // Supongamos que aquí realizas una solicitud HTTP para obtener los datos de los productos
    // Simularemos los datos con un array estático por ahora
    return [
      { id: '1', productos: ["2", "3"], fecha: '19/03/2023', empresa: 'Kafka', estado: "Entregado", precio: "$100000", usuario: "Juan Perez" },
      { id: '2', productos: ["4", "5"], fecha: '30/01/2024', empresa: 'Lidenor', estado: "En proceso", precio: "$100000", usuario: "Pedro Paz"},
      { id: '3', productos: ["1", "6"], fecha: '14/04/2024', empresa: 'Fact', estado: "Entregado", precio: "$100000", usuario: "Jimena Gomez" }
    ];
  }
}
