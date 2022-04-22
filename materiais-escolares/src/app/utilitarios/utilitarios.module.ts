import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NavbarComponent, StarRatingComponent],
  exports: [NavbarComponent, StarRatingComponent]
})
export class UtilitariosModule { }
