import { Component, OnInit } from '@angular/core';
import { Medicament } from './medicament.model';
import { MedicamentService } from './medicament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.page.html',
  styleUrls: ['./medicaments.page.scss'],
})
export class MedicamentsPage implements OnInit {

  meds?: Medicament[];

  constructor(private medsService: MedicamentService, private router: Router) { }

  ngOnInit() {
    this.meds = this.medsService.medInStock()
  }

  addToCart(num: string){
    this.medsService.addMedToCart(num);
    this.router.navigateByUrl('panier');
  }

}
