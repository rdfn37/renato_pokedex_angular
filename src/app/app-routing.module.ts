import { PokePageComponent } from './home/poke-page/poke-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationComponent } from './home/generation/generation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'xy',
  },
  {
    path: 'meowstic',
    pathMatch: 'full',
    redirectTo: 'meowstic-male',
  },
  {
    path: 'mr. mime',
    pathMatch: 'full',
    redirectTo: 'mr-mime',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'xy',
    loadChildren: () => import('./xy/xy.module').then((m) => m.XyModule),
  },
  {
    path: 'bw',
    loadChildren: () => import('./bw/bw.module').then((m) => m.BwModule),
  },
  {
    path: ':id',
    component: PokePageComponent,
  },
  {
    path: 'gen/:id',
    component: GenerationComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
