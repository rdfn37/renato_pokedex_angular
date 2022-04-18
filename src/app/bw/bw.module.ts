import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BwRoutingModule } from './bw-routing.module';
import { BwBattleComponent } from './bw-battle/bw-battle.component';
import { AppMaterialModule } from '../app-shared/app-material/app-material.module';


@NgModule({
  declarations: [
    BwBattleComponent
  ],
  imports: [
    CommonModule,
    BwRoutingModule,
    AppMaterialModule
  ]
})
export class BwModule { }
