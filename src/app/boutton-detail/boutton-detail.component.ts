//ajout de Input dans import pour importer les variabbles de la classe parents
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-boutton-detail',
  templateUrl: './boutton-detail.component.html',
  styleUrls: ['./boutton-detail.component.css']
})
export class BouttonDetailComponent {

// appel de tous les variables de la classe parent home
@Input() difficulte:any
@Input()  prep:any
@Input()  descriptif:any
@Input()  cuisson:any
@Input()  cout:any
@Input()  affiche:any
@Input() ingredients:any
@Input() etapes:any
@Input()  affiche1:any
@Input()  affiche2:any



butAffiche='Affiche detail';

surClick(){

  this.affiche=!this.affiche;
}
surClick1(){

  this.affiche1=!this.affiche1;
}
reset1(){
  this.affiche1=!this.affiche1;
}
surClick2(){

  this.affiche2=!this.affiche2;
}
reset2(){
  this.affiche2=!this.affiche2;
}

}


