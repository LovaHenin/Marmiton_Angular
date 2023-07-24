import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  constructor() {}

  recipes: any = Array();
  createRecipe(recipe: JSON): any {
    // return sessionStorage.removeItem('recipes'); // pour vider la session
    // session de angular entrer et suprrimer de la session

    if (!sessionStorage.getItem('recipes')) {
      let finalRecipe = { id: 1, ...recipe };
      this.recipes.push(finalRecipe);

      // return this.recipes;

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(sessionStorage.getItem('recipes')!); //! comme ca meme si c'est null ca passe
      console.log(this.recipes);
      //on récupère le dernier objet de notre tableau grace à slice(-1)
      // qui recrée un tableau avec le nombre d'entrées demandées ici 1
      //on accede à son indice ici 0 puis à sa propriete id
      // on incrémente de 1 pour créer le prochain id
      let id = this.recipes.slice(-1)[0]['id'] + 1; // derniere  objet entrée, recuperation de Id

      this.recipes.push({ id: id, ...recipe });

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
      //console.log(sessionStorage.getItem('recipes'));
    }
  }
  // comme fecth all
  readRecipes() {
    return JSON.parse(sessionStorage.getItem('recipes')!);
  }

  updateRecipe(recette: JSON, id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i]['id'] == id) {
        //... rajoute à la suite de mon objet dont le id=id les autres proprio
        this.recipes[i] = { id: id, ...recette };
        sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
      }
    }
  }

  // fetch : avec id
  readOneRecipe(id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i]['id'] == id) {
        return this.recipes[i]; // retourne juste un objet
      }
    }
  }

  deleteRecipe(id:any){
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
    if(this.recipes.length!=1){
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i]['id'] == id) {
        // indice i et supprimer 1 objet
          this.recipes.splice(i,1)
          
        sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
        }
      }
    }else{
      // supprimer juste un eregistrement
      sessionStorage.removeItem('recipes');
    }
    
  }
}
