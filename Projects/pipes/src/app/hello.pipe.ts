import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello',
  standalone: true
})
export class HelloPipe implements PipeTransform {

  transform(hello : any): string {
    if(hello ==0){
      return 'Male';
    }
    else{
      return 'Female';
    }
  }

}
