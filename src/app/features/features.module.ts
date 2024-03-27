import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PaginaFilmeComponent } from './pagina-filme/pagina-filme.component';

@NgModule({
  declarations: [
    HomeComponent,
    PaginaFilmeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
