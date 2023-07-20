import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes:Routes =[
{ path:"", component: HomeComponent },// ""=>home si path:"test"=> localhost:4020/test
{path:"formRecipe", component:RecipeFormComponent}// la classe du component





]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})



export class AppRoutingModule { }
