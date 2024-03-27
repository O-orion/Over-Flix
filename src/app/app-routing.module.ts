import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PaginaFilmeComponent } from './features/pagina-filme/pagina-filme.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - OverFLIX'
  },
  {
    path: 'filme',
    component: PaginaFilmeComponent,
    title: 'Filme - OverFLIX'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
