// ajouter FormsModule dans imports app.module.ts + service+ ngMode=>name form
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../services/API/http.service';
import { IngredientEnfantComponent } from '../ingredient-enfant/ingredient-enfant.component';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent {
  constructor(
    private http:HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  categories: any;
  id:any;
  recette = {
    id: 0,
    titre: '',
    id_categorie: '',
    description: '',
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',
    favori:'',
  };
// pour ingredient enfant
ingredients:Array<any>=[];

addIngr(event:any){
this.ingredients.push({
unite:event.unite,
quantite:event.quantite,
nom :event.nom,

});
}


  formulaire(form: NgForm) {
    //tester  le retour de form
    console.log(form.value);
  
    // return console.log(id);
  
 this.http.postData("recette",form.value).subscribe({
  next:(data)=>console.log("ok"),
  error:(err)=>console.log(err),
  complete:()=>console.log("complete recette")
 });
    // gerer le routage => apres ajout recette => vers la listeRecipe=>il faut ajouter la variable private router:Router dans constructor
    this.router.navigate(['listRecipe']);
    //console.log(test);
  }
  //ajouter dans import OnInit => recuperer l id et choisir entre ajout et modif
  ngOnInit() {
    this.http.getData("categorie").subscribe({
      next:(data)=>this.categories=data,
      error:(err)=>console.log(err),
      complete:()=>console.log("success")
    });
    // console.log("coucou" + this.categories);
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      console.log("id:", this.id);
      this.http.getData("recette",this.id).subscribe({
        next:(data)=>this.recette=data,
        error:(err)=>console.log(err),
        complete:()=>console.log("success")
      });
    }
  }
}
