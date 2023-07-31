import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.css'],
})
export class EtapeComponent {
  constructor(
    private httpService:HttpService,
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any;

  etapes: any;
  etape = {
    id: 0,
    titre: '',
    id_recette: '',
  };

  formulaire(form: NgForm) {
   // console.log(form.value);

    this.http.postData("etape",form.value).subscribe({
      next:(data)=>console.log("ok"),
      error:(err)=>console.log(err),
      complete:()=>console.log("complete ingredient")
     
     });
     this.getData();
        // gerer le routage => apres ajout recette => vers la listeRecipe=>il faut ajouter la variable private router:Router dans constructor
        this.router.navigate(['etape']);

        //console.log(test);
  }
  ngOnInit(): void {
    // recuperer recipes de la session via service
  
    this.getData();

    this.id = this.route.snapshot.paramMap.get('id');

    this.etape.id_recette=this.id;
  
  }
  
  getData(){
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.getDataEtape("etape",this.id).subscribe({
      next:(data)=> this.etapes=data,
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('Observer got a complete notification' )
    });
  }

  delete(id: any) {
    this.http.deleteData("etape",id).subscribe({
      next:(data)=> this.getData(),
      error:(err:Error)=>console.error('Observer got an error:' +err),
      complete:()=>console.log('suppression effectuée')
    });
   
  }
}
