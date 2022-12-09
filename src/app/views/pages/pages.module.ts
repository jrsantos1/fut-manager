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
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    UtilsModule
  ]
})
export class PagesModule { }
