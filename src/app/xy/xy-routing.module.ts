import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyBattlesComponent } from './xy-battles/xy-battles.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'battles'
  },
  {
    path: 'battles',
    component: XyBattlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyRoutingModule { }
