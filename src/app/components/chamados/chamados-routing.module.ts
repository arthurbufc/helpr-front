import { ChamadoCreateComponent } from './childrens/chamado-create/chamado-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados.component';
import { ChamadoUpdateComponent } from './childrens/chamado-update/chamado-update.component';

const routes: Routes = [
  { path: '',
  component: ChamadosComponent
  },
  {
    path: "new",
    component: ChamadoCreateComponent
  },
  {
    path: "edit/:id",
    component: ChamadoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
