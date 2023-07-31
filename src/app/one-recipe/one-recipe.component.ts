import { Component } from '@angular/core';

import { AsyncService } from '../services/API/async.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent {
  constructor(
    private http:HttpService,
    private router: Router,
    private route: ActivatedRoute // param dans url
  ) {}
recette:any;
id:any;
ngOnInit(): void {
  // recuperer recipes de la session via service


  this.id = this.route.snapshot.paramMap.get('id');
 //console.log(this.ingredients);
 //this.getIngredients();
 console.log(this.id);

 
    
  this.http.getDataPipe("recette",this.id).subscribe({//observable => suscribe
  
    next:(data)=>this.recette=data,
    error:(err)=>console.log(err),
    complete:()=>console.log("success")
  });

}
nbPersonne:any=1;
cout:any=20;
  ingredients:any=[
    {
      id:1,
      nom:'oeuf',
      quantite:2,
      unite:''
    },
    {
      id:2,
      nom:'Farine',
      quantite:200,
      unite:'gr'
    },
    {
      id:3,
      nom:'beurre',
      quantite:200,
      unite:'gr'
    },
    {
      id:4,
      nom:'chocolat',
      quantite:250,
      unite:'gr'
    }
   
  ]
  
}
