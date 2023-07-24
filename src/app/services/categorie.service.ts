import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
      
  ) { }

  categories: any = Array();
  createCategorie(categorie: JSON): any {
    // return sessionStorage.removeItem('recipes');
    // return sessionStorage.removeItem('categories'); // pour vider la session
    // session de angular entrer et suprrimer de la session

    if (!sessionStorage.getItem('categories')) {
      let finalCategorie = { id: 1, ...categorie };
      this.categories.push(finalCategorie);

      // return this.recipes;

      sessionStorage.setItem('categories', JSON.stringify(this.categories));
    //console.log(this.categories);
    } else {
      this.categories = JSON.parse(sessionStorage.getItem('categories')!); //! comme ca meme si c'est null ca passe
      console.log(this.categories);
      //on récupère le dernier objet de notre tableau grace à slice(-1)
      // qui recrée un tableau avec le nombre d'entrées demandées ici 1
      //on accede à son indice ici 0 puis à sa propriete id
      // on incrémente de 1 pour créer le prochain id
      let id = this.categories.slice(-1)[0]['id'] + 1; // derniere  objet entrée, recuperation de Id

      this.categories.push({ id: id, ...categorie });

      sessionStorage.setItem('categories', JSON.stringify(this.categories));
      //console.log(sessionStorage.getItem('recipes'));
    }
  }
  //recuperation de la session categories
  readCategories() {
    return JSON.parse(sessionStorage.getItem('categories')!);
  }

  updateCategorie(categorie: JSON, id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i]['id'] == id) {
        //... rajoute à la suite de mon objet dont le id=id les autres proprio
        this.categories[i] = { id: id, ...categorie };
        sessionStorage.setItem('categories', JSON.stringify(this.categories));
      }
    }
  }

  // fetch : avec id
  readOneCategorie(id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i]['id'] == id) {
        return this.categories[i]; // retourne juste un objet
      }
    }
  }

  deleteCategorie(id:any){
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);
    if(this.categories.length!=1){
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i]['id'] == id) {
        // indice i et supprimer 1 objet
          this.categories.splice(i,1)
          
        sessionStorage.setItem('categories', JSON.stringify(this.categories));
        }
      }
    }else{
      // supprimer juste un eregistrement
      sessionStorage.removeItem('categories');
    }
    
  }
  
}
