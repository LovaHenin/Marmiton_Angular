// ajouter FormsModule dans imports app.module.ts + service+ ngMode=>name form
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  constructor(private rs:RecetteService){

  }

  formulaire(form: NgForm){
//tester  le retour de form
    //console.log(form.value);
let test= this.rs.createRecipe(form.value);
console.log(test);
  }

}
