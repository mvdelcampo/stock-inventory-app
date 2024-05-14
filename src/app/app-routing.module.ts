import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosEnStockComponent } from './productos-en-stock/productos-en-stock.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {path: "productos-en-stock", component: ProductosEnStockComponent},
  {path: "pedidos", component: PedidosComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
