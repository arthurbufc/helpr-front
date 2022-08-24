import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './childrens/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './childrens/cliente-update/cliente-update.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: "new",
    component: ClienteCreateComponent
  },
  {
    path: "edit/:id",
    component: ClienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
