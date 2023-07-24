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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BouttonDetailComponent,
    RecipeFormComponent,
    ListeRecipeComponent,
    CategoriesComponent,
    ListeCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
