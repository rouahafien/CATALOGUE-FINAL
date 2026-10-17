import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(nb: number, seuil:number =5): string {
    if (nb==0) return"complet!";
    else{
      if(nb==1) return "derniere places!!";
      else{
        if((2 <= nb)&& (nb<= seuil))
        {
          return `plus que ${nb} places `
          
        }
          return `${nb} places disponibles`
      }
    }
    
  }
}
