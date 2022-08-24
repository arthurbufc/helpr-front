import { ChamadosModule } from './../../components/chamados/chamados.module';
import { ClientesModule } from './../../components/clientes/clientes.module';
import { NgModule } from '@angular/core';
import { HomeModule } from 'src/app/components/home/home.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { TecnicosModule } from 'src/app/components/tecnicos/tecnicos.module';


@NgModule({
  exports: [
    HomeModule,
    LoginModule,
    TecnicosModule,
    ClientesModule,
    ChamadosModule
  ]
})
export class PagesModule { }
