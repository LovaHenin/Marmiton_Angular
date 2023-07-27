import { Component,OnInit } from '@angular/core';
import { AsyncService } from '../services/API/async.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent {
  // comme dans API service
  categories: any;
  wait:any;
  reponse:any;
  constructor(private httpService:HttpService, private async:AsyncService,private router:Router,
    private route: ActivatedRoute) {
 

//  this.reponse=this.async.waitForResponse(this.wait);
//  console.log(this.reponse);
  }

  
  delete(id: any) {

    this.httpService.deleteData("categorie",id).subscribe({
      next:(data)=>this.getData(),
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification')
    });
    //  this.wait=this.http.post('http://localhost/marmiton/src/app/services/API/categorie.php?action=delete&id='+id, JSON.stringify(id)).toPromise().then((response:any)=>{this.ngOnInit();})
    
 // this.route.navigateByUrl('/categorie',{onSamerUrlNavigation:'reload'})
    
     }
    //ajouter dans import
    ngOnInit(): void {
      
      // this.wait=this.http.get('http://localhost/marmiton/src/app/services/API/categorie.php?action=readAll').toPromise().then((response:any)=>{this.categories=response;});
      this.getData();
     
     
    }

    getData(){
      this.httpService.getData("categorie").subscribe({
        next:(data)=> this.categories=data,
        error:(err:Error)=>console.error('Observer got an error:' +err),
        complete:()=>console.log('Observer got a complete notification')
      });
    }

}
