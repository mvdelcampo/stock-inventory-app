import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosServicio {

  constructor() { }

  obtenerPedidos() {
    // Supongamos que aquí realizas una solicitud HTTP para obtener los datos de los productos
    // Simularemos los datos con un array estático por ahora
    // aca voy a tener que pedir los pedidos y cuando me devuelvan el id en productos, usar otra funcion que busque el pedido por id con toda la info y lo coloque en el array para devolver toda la info
    return [
      {
        id: 1,
        fecha: '2024-05-18',
        empresa: 'Empresa 1',
        estado: 'En proceso',
        precio: 10000,
        usuario: 'Usuario 1',
        productos: [
          {
            codigo: 1,
            tipo: 'Elevador',
            marca: 'Marca A',
            modelo: 'Modelo X',
            ubicacion: 'Almacén 1',
            proveedor: 'Proveedor A',
            precio: 5000,
            estado: 'Vendido'
          },
          {
            codigo: 2,
            tipo: 'Balanceadora',
            marca: 'Marca B',
            modelo: 'Modelo Y',
            ubicacion: 'Almacén 2',
            proveedor: 'Proveedor B',
            precio: 5000,
            estado: 'Vendido'
          }
        ]
      },
      {
        id: 2,
        fecha: '2024-03-08',
        empresa: 'Empresa 2',
        estado: 'Entregado',
        precio: 20000,
        usuario: 'Usuario 1',
        productos: [
          {
            codigo: 3,
            tipo: 'Desenllantadora',
            marca: 'Marca A',
            modelo: 'Modelo X',
            ubicacion: 'Almacén 1',
            proveedor: 'Proveedor A',
            precio: 20000,
            estado: 'Vendido'
          }]
    	  },
      // Agrega más pedidos aquí
    ];
    /*return [
      { id: '1', productos: ["2", "3"], fecha: '19/03/2023', empresa: 'Kafka', estado: "Entregado", precio: "$100000", usuario: "Juan Perez" },
      { id: '2', productos: ["4", "5"], fecha: '30/01/2024', empresa: 'Lidenor', estado: "En proceso", precio: "$100000", usuario: "Pedro Paz"},
      { id: '3', productos: ["1", "6"], fecha: '14/04/2024', empresa: 'Fact', estado: "Entregado", precio: "$100000", usuario: "Jimena Gomez" }
    ];*/
  }
}
