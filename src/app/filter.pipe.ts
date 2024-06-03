import { Pipe, PipeTransform } from '@angular/core';
import { MoviesInfo } from './_model/MoviesInfo';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(movielist: Array<MoviesInfo>,title:string, releaseDate:string){ 
   
    let a = []
    if(title != ''){
      a = movielist.filter((res: MoviesInfo) => res['title'].toLowerCase().indexOf(title.toLowerCase())>-1);
    }else{
      a = movielist;
    }
    if(releaseDate != ''){
      a = a.filter((res: MoviesInfo) => res['release_date'].toLowerCase().indexOf(releaseDate.toLowerCase())>-1);
    }
    return a;
  }
}
