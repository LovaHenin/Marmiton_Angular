import { Component } from '@angular/core';
import { AsyncService } from '../services/API/async.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';
@Component({
  selector: 'app-liste-ingredient',
  templateUrl: './liste-ingredient.component.html',
  styleUrls: ['./liste-ingredient.component.css']
})
export class ListeIngredientComponent {

  constructor(private httpService:HttpService, private async:AsyncService,private router:Router,
    private route: ActivatedRoute,private http:HttpService,) {}
 

//  this.reponse=this.async.waitForResponse(this.wait);
//  console.log(this.reponse);
  
  ingredients:any

  delete(id: any) {
    this.http.deleteData("ingredient",id).subscribe({
      next:(data)=> this.getData(),
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('suppression effectuée')
    });
   
  }

  ngOnInit(): void {
      
    // this.wait=this.http.get('http://localhost/marmiton/src/app/services/API/categorie.php?action=readAll').toPromise().then((response:any)=>{this.categories=response;});
    this.getData();
      
  }

  getData(){
    this.httpService.getData("ingredient").subscribe({
      next:(data)=> this.ingredients=data,
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification')
    });
  }

}
