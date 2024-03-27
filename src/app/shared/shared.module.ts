import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SecaoDestaqueComponent } from './components/secao-destaque/secao-destaque.component';


@NgModule({
  declarations: [
    MenuComponent,
    CarouselComponent,
    SecaoDestaqueComponent
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
    SecaoDestaqueComponent
  ]
})
export class SharedModule { }
