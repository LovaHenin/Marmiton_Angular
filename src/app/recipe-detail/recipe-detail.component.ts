import { Component,Input } from '@angular/core';
import { AsyncService } from '../services/API/async.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  constructor(
    private http:HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any;
  action:any;
   ingredients:any;
   ngOnInit(): void {
    // recuperer recipes de la session via service
  
    this.getData();

  
  }
  
  getData(){
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.getDataIngredient("ingredient",this.id).subscribe({
      next:(data)=> this.ingredients=data,
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification' )
    });
  }

}
