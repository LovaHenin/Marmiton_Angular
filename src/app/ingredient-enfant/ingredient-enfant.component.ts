import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-enfant',
  templateUrl: './ingredient-enfant.component.html',
  styleUrls: ['./ingredient-enfant.component.css']
})
export class IngredientEnfantComponent {



  objet={
    unite:'',
    quantite:'',
    nom:''
   
    }

  @Output() ingrEvent=new EventEmitter();
  addIngredient(unite:string, quantite:string, nom:string){
this.objet.nom=nom;
this.objet.unite=unite;
this.objet.quantite=quantite;
this.ingrEvent.emit(this.objet);
  }
}
