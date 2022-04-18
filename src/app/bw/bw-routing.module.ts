import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BwBattleComponent } from './bw-battle/bw-battle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'battles'
  },
  {
    path: 'battles',
    component: BwBattleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwRoutingModule { }
