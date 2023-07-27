import { Component,OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AsyncService } from '../services/API/async.service';

import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    async: AsyncService,
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  wait: any;
  id: string | null = '0'; // pipe | ou null
  categorie = {
    titre: '',
  };
  formulaire(form: NgForm, id: any) {

this.http.postData("categorie",form.value).subscribe({
  next:(data)=>console.log(data),
  error:(err:Error)=>console.error('Observer got an error:' +err),
  complete:()=>console.log('Observer got a complete notification')
});

    this.router.navigate(['listeCategories']);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
    }
  }
}
