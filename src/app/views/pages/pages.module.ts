import { MultiSelectModule } from 'primeng/multiselect';
import { MultselectComponent } from './../utils/multselect/multselect.component';
import { ButtonModule } from 'primeng/button';
import { UtilsModule } from './../utils/utils.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PagesComponent,
    MultselectComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    UtilsModule,
    ButtonModule,
    MultiSelectModule
  ]
})
export class PagesModule { }
