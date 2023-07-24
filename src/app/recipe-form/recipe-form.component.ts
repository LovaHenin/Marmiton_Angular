// ajouter FormsModule dans imports app.module.ts + service+ ngMode=>name form
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent {
  constructor(
    private rs: RecetteService,
    private rs1:CategorieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  categories: any;
  id: string | null = '0'; // pipe | ou null
  recette={
    titre:'',
    categorie:'',
    descriptif:'',
    ingredient:[],
    difficulte:'',
    tempsPrep :'',
    tempsCuisson:'',
    cout:'',
    photo:'',
    etapes:[]


  };


  formulaire(form: NgForm, id:any) {
    //tester  le retour de form
    //console.log(form.value);
   // return console.log(id);
    if(id==null){
      let test = this.rs.createRecipe(form.value);
    } else{
    this.rs.updateRecipe(form.value,id);
    }
   
    // gerer le routage => apres ajout recette => vers la listeRecipe=>il faut ajouter la variable private router:Router dans constructor
    this.router.navigate(['listRecipe']);
    //console.log(test);
  }
  //ajouter dans import OnInit => recuperer l id et choisir entre ajout et modif
  ngOnInit() {
    this.categories = this.rs1.readCategories();
   // console.log("coucou" + this.categories);
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!=null) {
      this.recette = this.rs.readOneRecipe(this.id);
     
    }
  }
}
