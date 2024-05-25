import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicio {

  constructor(private http: HttpClient) { }

  obtenerElevadoresAgrupados() { // cambiar por el servicio que busque todo segun el tipo
    // Supongamos que aquí realizas una solicitud HTTP para obtener los datos de los productos
    // Simularemos los datos con un array estático por ahora
    return [
      { marca: 'Peugeout', modelo: '8088', ubicacion: 'Depósito central', precio: '$ 50000', cantidad: 25 },
      { marca: 'Chevrolet', modelo: '9000', ubicacion: 'Depósito Malvín', precio: '$ 40000', cantidad: 30 },
      { marca: 'InkPro', modelo: '3000', ubicacion: 'Depósito Pocitos', precio: '$ 45000', cantidad: 20 }
    ];
  }
  obtenerDetallesProductosPorModelo(modelo: string): Observable<any> {

    const params = new HttpParams().set('modelo', modelo);
    return this.http.get<any>("https://iru0rmgkri.execute-api.us-east-2.amazonaws.com/dev/", { params });

    /*return [
      { codigo: 1, proveedor: 'Maquinas de Calidad SA', estado: "En Stock"},
      { codigo: 2, proveedor: 'Super equipos SA', estado: "Vendido" },
      // Otros detalles de los elevadores
    ];*/
  }

  obtenerCantidadTotalElevadores(){ // cambiar por el servicio que busque todo segun el tipo
    let cant: number = 0;
    let elevadores = this.obtenerElevadoresAgrupados();
    for (let elemento of elevadores){
      cant = cant + elemento.cantidad;
    }
    return cant;
  }
}
