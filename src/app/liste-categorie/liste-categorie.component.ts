import { Component,OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent {
  constructor(private rs: CategorieService) {}

  categories: any;
  delete(id: any) {
    this.rs.deleteCategorie(id);
    // refress=> recharge de DOM
    this.ngOnInit();
  }
    //ajouter dans import
    ngOnInit(): void {
      // recuperer recipes de la session via service
      this.categories = this.rs.readCategories();
      console.log(this.categories);
    }

}
