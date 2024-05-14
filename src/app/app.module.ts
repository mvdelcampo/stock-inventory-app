import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosEnStockComponent } from './productos-en-stock/productos-en-stock.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ElevadoresComponent } from './elevadores/elevadores.component';
import { CabinasDePinturaComponent } from './cabinas-de-pintura/cabinas-de-pintura.component';
import { BalanceadorasComponent } from './balanceadoras/balanceadoras.component';
import { DesenllantadorasComponent } from './desenllantadoras/desenllantadoras.component';
import { LamparasDeSecadoComponent } from './lamparas-de-secado/lamparas-de-secado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosEnStockComponent,
    PedidosComponent,
    ElevadoresComponent,
    CabinasDePinturaComponent,
    BalanceadorasComponent,
    DesenllantadorasComponent,
    LamparasDeSecadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
