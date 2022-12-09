import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { MensagemComponent } from './mensagem/mensagem.component';


@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports: [
    MensagemComponent
  ]
})
export class UtilsModule { }
