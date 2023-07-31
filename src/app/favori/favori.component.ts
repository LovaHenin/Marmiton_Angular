import { Component } from '@angular/core';
import { AsyncService } from '../services/API/async.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.css']
})
export class FavoriComponent {
  constructor(
    private http:HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

   favoris:any;
   ngOnInit(): void {
    // recuperer recipes de la session via service
  
    this.getData();

  
  }
  
  getData(){
    
    this.http.getDataFavori("recette").subscribe({
      next:(data)=> this.favoris=data,
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification' )
    });
  }

}
