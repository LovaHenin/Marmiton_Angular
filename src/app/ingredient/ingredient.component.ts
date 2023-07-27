import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../services/API/http.service';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  constructor(
    private http:HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any;
  action:any;
   ingredients:any;
  ingredient = {
    id:0,
    titre: '',
    quantite:'',
    unite:'',
    id_recette:''
  };

  formulaire(form: NgForm) {
    console.log(form.value);

    this.http.postData("ingredient",form.value).subscribe({
      next:(data)=>console.log("ok"),
      error:(err)=>console.log(err),
      complete:()=>console.log("complete ingredient")
     
     });
     
        // gerer le routage => apres ajout recette => vers la listeRecipe=>il faut ajouter la variable private router:Router dans constructor
        this.router.navigate(['listeIngredients']);
        //console.log(test);
  }

  ngOnInit() {
    this.http.getData("ingredient").subscribe({
      next:(data)=>this.ingredients=data,
      error:(err)=>console.log(err),
      complete:()=>console.log("success")
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.action = this.route.snapshot.url[1].path;
  
  
   //console.log("action =" + this.action +"id =" + this.id);
  

    if (this.id != null && this.action=='modif') {
      console.log("id:", this.id);
      this.http.getData("ingredient",this.id).subscribe({
        next:(data)=>this.ingredient=data,
        error:(err)=>console.log(err),
        complete:()=>console.log("success")
      });
    }else{
      this.id=0;
    }
  }
}
