import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ElevadoresComponent } from './elevadores/elevadores.component';
import { BalanceadorasComponent } from './balanceadoras/balanceadoras.component';
import { CabinasDePinturaComponent } from './cabinas-de-pintura/cabinas-de-pintura.component';
import { DesenllantadorasComponent } from './desenllantadoras/desenllantadoras.component';
import { LamparasDeSecadoComponent } from './lamparas-de-secado/lamparas-de-secado.component';
import { DetalleElevadoresComponent } from './detalle-elevadores/detalle-elevadores.component';
import { DetalleBalanceadorasComponent } from './detalle-balanceadoras/detalle-balanceadoras.component';
import { DetalleDesenllantadorasComponent } from './detalle-desenllantadoras/detalle-desenllantadoras.component';
import { DetalleCabinasDePinturaComponent } from './detalle-cabinas-de-pintura/detalle-cabinas-de-pintura.component';
import { DetalleLamparasDeSecadoComponent } from './detalle-lamparas-de-secado/detalle-lamparas-de-secado.component';

const routes: Routes = [
  { path: '', redirectTo: '/pedidos', pathMatch: 'full' },  // Ruta por defecto
  {path: "pedidos", component: PedidosComponent },
  {path: "elevadores", component: ElevadoresComponent},
  {path: "balanceadoras", component: BalanceadorasComponent},
  {path: "cabinas-de-pintura", component: CabinasDePinturaComponent},
  {path: "desenllantadoras", component: DesenllantadorasComponent},
  {path: "lamparas-de-secado", component: LamparasDeSecadoComponent},
  {path: "elevadores/:modelo", component: DetalleElevadoresComponent},
  {path: "balanceadoras/:modelo", component: DetalleBalanceadorasComponent},
  {path: "desenllantadoras/:modelo", component: DetalleDesenllantadorasComponent},
  {path: "cabinas-de-pintura/:modelo", component: DetalleCabinasDePinturaComponent},
  {path: "lamparas-de-secado/:modelo", component: DetalleLamparasDeSecadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
