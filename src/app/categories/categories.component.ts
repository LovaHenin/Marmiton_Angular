import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(
    private rs : CategorieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: string | null = '0'; // pipe | ou null
  categorie={
    nom:'',
 
  };
  formulaire(form: NgForm, id:any) {
    //tester  le retour de form
    console.log(form.value);
    
   //console.log(id);
    if(id==null){
   //   console.log('coucou');
      let test = this.rs.createCategorie(form.value);

    } else{
      this.rs.updateCategorie(form.value,id);
    }
    this.router.navigate(['listeCategories']);
    // gerer le routage => apres ajout recette => vers la listeRecipe=>il faut ajouter la variable private router:Router dans constructor
  
    //console.log(test);
  }
   //ajouter dans import OnInit => recuperer l id et choisir entre ajout et modif
   ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!=null) {
      this.categorie = this.rs.readOneCategorie(this.id);
    }
  }
}
