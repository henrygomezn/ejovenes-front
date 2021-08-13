import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterC'
})
export class FilterCPipe implements PipeTransform {

 
  transform(value: any, arg: any): any {
    const resultCuentos = [];
        for(const item of value){
            if(item.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                resultCuentos.push(item);
                
            }

        }
return resultCuentos;
  }

}
