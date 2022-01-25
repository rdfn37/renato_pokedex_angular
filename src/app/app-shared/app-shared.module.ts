import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixOrderPipe } from './pipes/fix-order.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixOrderPipe
  ],
  exports:[
    FixOrderPipe
  ]
})
export class AppSharedModule { }
