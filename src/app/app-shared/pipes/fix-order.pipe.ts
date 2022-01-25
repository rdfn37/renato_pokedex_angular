import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/home/models/pokemon';

@Pipe({
  name: 'fixOrder'
})
export class FixOrderPipe implements PipeTransform {

  transform(data: Pokemon[]): any {
    console.log(data[3])
    console.log(data.map(pokemon => pokemon.id))
    return
  }

}
