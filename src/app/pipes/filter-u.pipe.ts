import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterU'
})
export class FilterUPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUsers = [];
        for(const item of value){

             if(item.username){
            if(item.username.toLowerCase().indexOf(arg.toLowerCase()) > -1){
              resultUsers.push(item);
                
                }
             }
        }
return resultUsers;
  }

}
