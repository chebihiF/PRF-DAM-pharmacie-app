import { Injectable } from '@angular/core';
import { Medicament } from './medicament.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private _medsInCart: Medicament[] = []

  private _meds: Medicament[] = [
    new Medicament(
      'n1',
      'DOLIPRANE',
      2,
      2.5,
      'https://pharmacie-saintemarie-gabon.com/wp-content/uploads/sites/24/2022/11/image_produit-268045_411605478.png'
    ),
    new Medicament(
      'n2',
      'DAFALGAN',
      10,
      3.5,
      'https://www.pharma-gdd.com/media/cache/resolve/product_show/upsa-dafalgan-tabs-1000-mg-douleurs-et-fievre-8-comprimes-face.jpg'
    ),
    new Medicament(
      'n3',
      'LEVOTHYROX',
      10,
      25,
      'https://www.liberation.fr/resizer/z4JBPxRteff_nlv5sVJnk1I_jkE=/arc-photo-liberation/eu-central-1-prod/public/QVGQJQ2K4BGHDHYBGXJKAYH5SE.jpg'
    ),
    new Medicament(
      'n4',
      'TAHOR',
      100,
      2,
      'https://pharmnet-dz.com/ImageHandler.ashx?imageurl=/img/medics/1564.png'
    )
  ];

  paiement(){
    console.log(this._medsInCart);
    console.log(this._meds);

    for(let i=0; i<this._meds.length; i++){
      for(let j=0; j<this._medsInCart.length; j++){
        if(this._meds[i].num === this._medsInCart[j].num){
          console.log(this._meds[i].qte +" "+ this._medsInCart[j].qte)
          this._meds[i].qte -= this._medsInCart[j].qte;
          break;
        }
      }
    }
    console.log(this._meds);
  }

  get medsInCart() {
    return this._medsInCart;
  }

  get meds() {
    return this._meds;
  }

  medInStock(){
    return this._meds.filter(med => med.qte > 0)
  }

  addMedToCart(num: string){
    let med = this._meds.find(med => med.num === num)!

    this._medsInCart.push(
       new Medicament(
        med.num,
        med.nom,
        med.qte,
        med.prix,
        med.imageUrl
       )
    )
  }

  deleteMedFromCart(num : string){
    this._medsInCart = this._medsInCart.filter(med => med.num !== num)
    return this._medsInCart;
  }


  constructor() { }
}
