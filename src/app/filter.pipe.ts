import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(movielist: Array<any>,title:string, releaseDate:string){ 
   
    let a = []
    if(title != ''){
      a = movielist.filter((res: any) => res['title'].toLowerCase().indexOf(title.toLowerCase())>-1);
    }else{
      a = movielist;
    }
    if(releaseDate != ''){
      a = a.filter((res: any) => res['release_date'].toLowerCase().indexOf(releaseDate.toLowerCase())>-1);
    }
    return a;
  }
}
