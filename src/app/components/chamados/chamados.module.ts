import { PipesModule } from './../../pipes/pipes.module';
import { NavBarModule } from './../nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChamadoCreateComponent } from './childrens/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './childrens/chamado-update/chamado-update.component';
import { ChamadoDetailsComponent } from './childrens/chamado-details/chamado-details.component';


@NgModule({
  declarations: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoDetailsComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent
  ]
})
export class ChamadosModule { }
