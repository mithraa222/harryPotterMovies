import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieRecords } from './_model/MovieRecords';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllDetails():Observable<MovieRecords>
  {
    return this.httpClient.get<MovieRecords>('../assets/records.json');
  }
}
