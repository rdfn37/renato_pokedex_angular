import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyRoutingModule } from './xy-routing.module';
import { XyGymsComponent } from './xy-gyms/xy-gyms.component';
import { AppMaterialModule } from '../app-shared/app-material/app-material.module';


@NgModule({
  declarations: [
    XyGymsComponent
  ],
  imports: [
    CommonModule,
    XyRoutingModule,
    AppMaterialModule
  ]
})
export class XyModule { }
