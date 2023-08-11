import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImcRoutingModule } from './imc-routing.module';
import { ImcComponent } from './imc/imc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImcComponent
  ],
  imports: [
    CommonModule,
    ImcRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImcModule { }
