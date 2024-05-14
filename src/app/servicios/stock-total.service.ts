import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockTotalServicio {

  constructor() { }

  obtenerProductosEnStock() {
    // Supongamos que aquí realizas una solicitud HTTP para obtener los datos de los productos
    // Simularemos los datos con un array estático por ahora
    return [
      { tipo: 'Elevador', marca: 'Peugeot', modelo: 'E800' },
      { tipo: 'Elevador', marca: 'Chevrolet', modelo: 'E9098' },
      { tipo: 'Cabina de pintura', marca: 'Cabinas Excelentes SA', modelo: 'C7632' }
    ];
  }
}
