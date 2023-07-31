import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { CategorieService } from '../services/categorie.service';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-liste-recipe',
  templateUrl: './liste-recipe.component.html',
  styleUrls: ['./liste-recipe.component.css'],
})
export class ListeRecipeComponent {
  // constructeur pour utiliser le service
  constructor(
    private http:HttpService,
    private rs: RecetteService,
 
    ) {}
  affiche=false;
  recipes1: any[]=[];
  recipes: any;
  categories: any;
  ingredients: any;

  delete(id: any) {
    this.http.deleteData("recette",id).subscribe({
      next:(data)=> this.getData(),
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('suppression effectuée')
    });
   
  }



  //ajouter dans import
  ngOnInit(): void {
    // recuperer recipes de la session via service
  
    this.getData();

   //console.log(this.ingredients);
   //this.getIngredients();

  }

  selectedOption: any; // Vous pouvez déclarer ici le type approprié pour l'id (number, string, etc.)

  onOptionSelected(selectedId: number) {
        // Faites quelque chose en fonction de l'id sélectionné
        console.log('ID sélectionné :', selectedId);
   
   this.recipes1=(this.rs.afficheCategorie(selectedId));
   //console.log(this.recipes1);
   
  }

  getData(){
    this.http.getData("recette").subscribe({
      next:(data)=> this.recipes=data,
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification')
    });
  }

//  getIngredients(){
//   this.http.getDataIngredient("ingredient",2).subscribe({
//     next:(data)=> this.ingredients=data,
//     error:(err:Error)=>console.error('Observer got an error:' +err),
//     complete:()=>console.log('Observer got a complete notification' )
//   });
//  }
  

}
