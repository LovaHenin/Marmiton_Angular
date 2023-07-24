import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-liste-recipe',
  templateUrl: './liste-recipe.component.html',
  styleUrls: ['./liste-recipe.component.css'],
})
export class ListeRecipeComponent {
  // constructeur pour utiliser le service
  constructor(
    private rs: RecetteService,
    private rs1:CategorieService,
    ) {}

  recipes: any;
  categories: any;

  delete(id: any) {
    this.rs.deleteRecipe(id);
    // refress=> recharge de DOM
    this.ngOnInit();
  }
  //ajouter dans import
  ngOnInit(): void {
    // recuperer recipes de la session via service
    this.recipes = this.rs.readRecipes();
    // recuperer les categories dans categorie.service
    this.categories = this.rs1.readCategories();
  }
}
