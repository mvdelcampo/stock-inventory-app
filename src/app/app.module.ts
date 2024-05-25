import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidosServicio } from './servicios/pedidos.service';
import { ElevadoresComponent } from './elevadores/elevadores.component';
import { CabinasDePinturaComponent } from './cabinas-de-pintura/cabinas-de-pintura.component';
import { BalanceadorasComponent } from './balanceadoras/balanceadoras.component';
import { DesenllantadorasComponent } from './desenllantadoras/desenllantadoras.component';
import { LamparasDeSecadoComponent } from './lamparas-de-secado/lamparas-de-secado.component';
import { DetalleElevadoresComponent } from './detalle-elevadores/detalle-elevadores.component';
import { DetalleBalanceadorasComponent } from './detalle-balanceadoras/detalle-balanceadoras.component';
import { DetalleDesenllantadorasComponent } from './detalle-desenllantadoras/detalle-desenllantadoras.component';
import { DetalleCabinasDePinturaComponent } from './detalle-cabinas-de-pintura/detalle-cabinas-de-pintura.component';
import { DetalleLamparasDeSecadoComponent } from './detalle-lamparas-de-secado/detalle-lamparas-de-secado.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ElevadoresComponent,
    CabinasDePinturaComponent,
    BalanceadorasComponent,
    DesenllantadorasComponent,
    LamparasDeSecadoComponent,
    DetalleElevadoresComponent,
    DetalleBalanceadorasComponent,
    DetalleDesenllantadorasComponent,
    DetalleCabinasDePinturaComponent,
    DetalleLamparasDeSecadoComponent,
    NuevoProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()) // Configurar HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
