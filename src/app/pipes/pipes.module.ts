import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { PrioridadePipe } from './prioridade.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    PrioridadePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    PrioridadePipe
  ]
})
export class PipesModule { }
