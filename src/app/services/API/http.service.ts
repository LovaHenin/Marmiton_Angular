import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}

// comme fetch et fecthAll
  getData(table:string,id:any=null):Observable<any>{
   
if(id!=null){
  return this.http.get('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=readOne&id='+id);

}else{

  return this.http.get('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=readAll');
}
}

// comme fetch et fecthAll
getDataIngredient(table:string,id:any=null):Observable<any>{
   
  if(id!=null){
    return this.http.get('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=readIngredients&id='+id);
  
  }else{
  
    return this.http.get('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=readAll');
  }
  }



  deleteData(table:string,id:any):Observable<any>{
 return this.http.post('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=delete&id='+id, {});
//  return this.getData(table);
  }

  
  postData(table:string,data:any):Observable<any>{

    return  this.http.post('http://localhost/marmiton/src/app/services/API/' + table +'.php?action=create', JSON.stringify(data));

  }
}
