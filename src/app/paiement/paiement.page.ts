import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../medicaments/medicament.service';
import { Medicament } from '../medicaments/medicament.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

  medAchat: Medicament[] = [];

  constructor(private medService: MedicamentService, private router: Router) { }

  ngOnInit() {
    this.medAchat = this.medService.medsInCart;
  }



  paiement(){
    console.log(this.medService.medsInCart);
    this.medService.paiement();
    this.router.navigateByUrl("");
  }

}
