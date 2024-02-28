import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbCarouselModule

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class FeaturesModule { }
