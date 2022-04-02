import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyGymsComponent } from './xy-gyms/xy-gyms.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gyms'
  },
  {
    path: 'gyms',
    component: XyGymsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyRoutingModule { }
