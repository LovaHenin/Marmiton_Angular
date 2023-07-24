//=> à verifier que c ajouter dans app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListeRecipeComponent } from './liste-recipe/liste-recipe.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';

const routes:Routes =[
{ path:"", component: HomeComponent },// ""=>home si path:"test"=> localhost:4020/test=>ajouter dans nav=>routerLink="/">Accueil</a>
{path:"formRecipe", component:RecipeFormComponent},// la classe du component=>ajouter dans nav=>routerLink="/formRecipe">J'ajoute ma recette</a>
{path:"formRecipe/:id", component:RecipeFormComponent},// pour modification
{path:"listRecipe",component: ListeRecipeComponent},
{path:"categories",component: CategoriesComponent},
{path:"categories/:id",component: CategoriesComponent},
{path:"listeCategories",component: ListeCategorieComponent}





]


@NgModule({
  declarations: [], // ajouter en premier pour avoir la liste dans path ou autre
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})



export class AppRoutingModule { }
