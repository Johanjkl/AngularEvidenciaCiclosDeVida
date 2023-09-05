import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosRoutingModule } from './ciclos-routing.module';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';


@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component
  ],
  imports: [
    CommonModule,
    CiclosRoutingModule
  ]
})
export class CiclosModule { }
