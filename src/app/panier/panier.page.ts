import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../medicaments/medicament.service';
import { Medicament } from '../medicaments/medicament.model';
import { log } from 'console';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  medInCart: Medicament[] = [];
  qte: number = 0 ;

  constructor(private medService: MedicamentService) { }

  ngOnInit() {
    this.medInCart = this.medService.medsInCart
  }

  deleteMedFromCart(num: string){
    this.medInCart = this.medService.deleteMedFromCart(num)
  }

  chageQuantity(num: string){
    let med = this.medInCart.find(med => med.num == num);
    med!.qte = this.qte ;

    console.log(this.medInCart)
  }

  paiement(){

  }

}
