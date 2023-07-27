import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, isObservable } from 'rxjs';
declare let Zone:any;
@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  //Zone:any;

  async waitForResponse<T>(prom:Promise<T> | Observable<T>):Promise<T>{

    if (isObservable(prom))
    {
      // comme set timeout en js
      prom=firstValueFrom(prom);
    
    }
      // on planifie la tache, à l'instant t
      const macroTask=Zone.current.scheduleMacroTask(
        `WAIT FOR-${Math.random()}`,
        ()=>{},
        {},
        ()=>{}
      );
      return prom.then((p:T)=>{

        macroTask.invoke();
        return p
      });

   

  }

}
