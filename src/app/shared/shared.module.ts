import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SecaoDestaqueComponent } from './components/secao-destaque/secao-destaque.component';
import { FilmesMaisAssistidosComponent } from './components/filmes-mais-assistidos/filmes-mais-assistidos.component';
import { PlayerFilmeComponent } from './components/player-filme/player-filme.component';


@NgModule({
  declarations: [
    MenuComponent,
    CarouselComponent,
    SecaoDestaqueComponent,
    FilmesMaisAssistidosComponent,
    PlayerFilmeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CoreModule

  ],
  exports: [
    MenuComponent,
    CarouselComponent,
    SecaoDestaqueComponent,
    FilmesMaisAssistidosComponent,
    PlayerFilmeComponent
  ]
})
export class SharedModule { }
