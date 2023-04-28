import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../medicaments/medicament.service';
import { Medicament } from '../medicaments/medicament.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  medInCart: Medicament[] = [];

  constructor(private medService: MedicamentService) { }

  ngOnInit() {
    this.medInCart = this.medService.medsInCart
  }

  deleteMedFromCart(num: string){
    this.medInCart = this.medService.deleteMedFromCart(num)
  }

}
