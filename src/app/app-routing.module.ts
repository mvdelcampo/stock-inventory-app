import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosEnStockComponent } from './productos-en-stock/productos-en-stock.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ElevadoresComponent } from './elevadores/elevadores.component';
import { BalanceadorasComponent } from './balanceadoras/balanceadoras.component';
import { CabinasDePinturaComponent } from './cabinas-de-pintura/cabinas-de-pintura.component';
import { DesenllantadorasComponent } from './desenllantadoras/desenllantadoras.component';
import { LamparasDeSecadoComponent } from './lamparas-de-secado/lamparas-de-secado.component';

const routes: Routes = [
  {path: "productos-en-stock", component: ProductosEnStockComponent},
  {path: "pedidos", component: PedidosComponent },
  {path: "elevadores", component: ElevadoresComponent},
  {path: "balanceadoras", component: BalanceadorasComponent},
  {path: "cabinas-de-pintura", component: CabinasDePinturaComponent},
  {path: "desenllantadoras", component: DesenllantadorasComponent},
  {path: "lamparas-de-secado", component: LamparasDeSecadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
