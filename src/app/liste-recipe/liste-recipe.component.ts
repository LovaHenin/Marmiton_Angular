import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-liste-recipe',
  templateUrl: './liste-recipe.component.html',
  styleUrls: ['./liste-recipe.component.css'],
})
export class ListeRecipeComponent {
  // constructeur pour utiliser le service
  constructor(private rs: RecetteService) {}

  recipes: any;

  delete(id: any) {
    this.rs.deleteRecipe(id);
    // refress=> recharge de DOM
    this.ngOnInit();
  }
  //ajouter dans import
  ngOnInit(): void {
    // recuperer recipes de la session via service
    this.recipes = this.rs.readRecipes();
  }
}