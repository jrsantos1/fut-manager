import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule} from 'primeng/multiselect'

import { UtilsRoutingModule } from './utils-routing.module';
import { MensagemComponent } from './mensagem/mensagem.component';



@NgModule({
  declarations: [
    MensagemComponent,
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    MultiSelectModule

  ],
  exports: [
    MensagemComponent
  ]
})
export class UtilsModule { }
