import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // variable à utiliser chez la classe fille=>input dans la classe enfant boutton-detail
  affiche=false;
  affiche1=false;
  affiche2=false;



recettes=[
{
titre:'Tartiflette',
descriptif:'Super recette pour l\' été',
ingredient:['10 patates','2 reblochons','2 oignons', '300g de lardons','20cl de crème liquide'],
difficulte:'Debutant',
tempsPrep :'30',
tempsCuisson:'30',
cout:2,
photo:'https://assets.afcdn.com/recipe/20200408/109518_w1024h1024c1cx1486cy2142.webp',
etapes:['faire revenir les oignons et les lardons','ajouter les patates et les vin blanc','ajouter la crème']
},
{
  titre:'Tarte aux pommes',
  descriptif:'Super recette pour l\' été',
  ingredient:['10 patates','2 reblochons','2 oignons', '300g de lardons','20cl de crème liquide'],
  difficulte:'Debutant',
  tempsPrep :'30',
  tempsCuisson:'30',
  cout:2,
  photo:'https://static.750g.com/images/1200-675/a96d46e59b4f0ab8169c7cb0cb932a84/la-cuisson.jpg',
  etapes:['faire revenir les oignons et les lardons','ajouter les patates et les vin blanc','ajouter la crème']
  }
]

}
