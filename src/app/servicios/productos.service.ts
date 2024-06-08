import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicio {
  private rutaBase: string = "https://9s7wh83mwa.execute-api.us-east-2.amazonaws.com/dev";

  constructor(private http: HttpClient) { }

  obtenerProductosAgrupados(tipo: string): Observable<any> {
    const params = new HttpParams().set('tipo', tipo);
    return this.http.get<any>(`${this.rutaBase}/productos/tipos`, { params })
      .pipe(
        tap(response => {
          console.log('Response body:', response);
        }),
        map(response => response) // Si el cuerpo de la respuesta es el array deseado, simplemente retornarlo
      );
  }
  obtenerDetallesProductosPorModelo(modelo: string): Observable<any> {

    const params = new HttpParams().set('modelo', modelo);
    console.log(this.http.get<any>(this.rutaBase + "/productos/modelos", { params }));
    return this.http.get<any>(this.rutaBase + "/productos/modelos", { params });
  }

  obtenerCantidadTotalProductos(tipo: string): Observable<number> {
    return this.obtenerProductosAgrupados(tipo).pipe(
      map(productos => productos.map((producto: { Cantidad: number; }) => Number(producto.Cantidad))),
      map(cantidades => cantidades.reduce((acc: any, cantidad: number) => acc + cantidad, 0))
    );
  }

  crearProducto(producto: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(this.rutaBase + "/productos", producto, { headers })

    return this.http.post<any>(this.rutaBase + "/productos", producto, { headers });
  }
}
