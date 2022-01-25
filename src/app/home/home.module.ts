import { AppSharedModule } from './../app-shared/app-shared.module';
import { FixOrderPipe } from './../app-shared/pipes/fix-order.pipe';
import { AppMaterialModule } from './../app-shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokePageComponent } from './poke-page/poke-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    AppSharedModule
  ]
})
export class HomeModule { }
