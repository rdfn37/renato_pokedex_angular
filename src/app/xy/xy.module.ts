import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-shared/app-material/app-material.module';
import { XyBattlesComponent } from './xy-battles/xy-battles.component';
import { XyRoutingModule } from './xy-routing.module';


@NgModule({
  declarations: [
    XyBattlesComponent
  ],
  imports: [
    CommonModule,
    XyRoutingModule,
    AppMaterialModule
  ]
})
export class XyModule { }
