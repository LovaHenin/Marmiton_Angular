import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BouttonDetailComponent } from './boutton-detail/boutton-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListeRecipeComponent } from './liste-recipe/liste-recipe.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ListeIngredientComponent } from './liste-ingredient/liste-ingredient.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BouttonDetailComponent,
    RecipeFormComponent,
    ListeRecipeComponent,
    CategoriesComponent,
    ListeCategorieComponent,
    IngredientComponent,
    ListeIngredientComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
