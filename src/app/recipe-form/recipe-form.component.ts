import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  formulaire(form: NgForm){
console.log(form.value);

  }

}
