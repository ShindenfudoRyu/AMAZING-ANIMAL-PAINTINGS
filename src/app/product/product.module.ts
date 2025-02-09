import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatToolbarModule
  ]
})
export class ProductModule { }
