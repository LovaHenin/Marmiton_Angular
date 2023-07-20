import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  constructor() {}

  recipes: any = Array();
  createRecipe(recipe: JSON): any {
    // sessionStorage.removeItem('recipes'); // pour vider la session
    // session de angular entrer et suprrimer de la session

    if (!sessionStorage.getItem('recipes')) {
      let finalRecipe = { id: 1, ...recipe };
      this.recipes.push(finalRecipe);

      // return this.recipes;

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(sessionStorage.getItem('recipes')!); //! comme ca meme si c'est null ca passe

      //on récupère le dernier objet de notre tableau grace à slice(-1)
      // qui recrée un tableau avec le nombre d'entrées demandées ici 1
      //on accede à son indice ici 0 puis à sa propriete id
      // on incrémente de 1 pour créer le prochain id
      let id = this.recipes.slice(-1)[0]['id'] + 1; // derniere  objet entrée

      this.recipes.push({ id: id, ...recipe });

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
      //console.log(sessionStorage.getItem('recipes'));
    }
  }
  readRecipes() {
    return JSON.parse(sessionStorage.getItem('recipes')!);
  }
}
