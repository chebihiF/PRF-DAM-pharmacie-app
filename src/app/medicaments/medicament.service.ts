import { Injectable } from '@angular/core';
import { Medicament } from './medicament.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  backEndUrl = "https://pharmacie-back-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  /*addMed(){
    for(let i=0;i<this._meds.length;i++){
      this.http
      .post(this.backEndUrl+'medicaments.json',{...this._meds[i], id:null})
      .subscribe((data)=>console.log(data))
    }
  }*/

  private _medsInCart: Medicament[] = []

  private _meds: Medicament[] = [];

  fetchMeds()
  {
    return this.http.get<{[key: string]: Medicament}>(this.backEndUrl+"medicaments.json")
  }


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
    this._medsInCart = this._medsInCart.filter(med => med.num !== num) // 20s
    return this._medsInCart;
  }



}
