import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../medicaments/medicament.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private medService: MedicamentService) { }



  ngOnInit() {

  }

}
