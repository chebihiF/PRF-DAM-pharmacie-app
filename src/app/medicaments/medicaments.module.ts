import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentsPageRoutingModule } from './medicaments-routing.module';

import { MedicamentsPage } from './medicaments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentsPageRoutingModule
  ],
  declarations: [MedicamentsPage]
})
export class MedicamentsPageModule {}
