import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApiAlticciSequence } from '../model/ResponseApiAlticciSequence';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  getResultToAlticciSequence(n: string): Observable<any>{
    return this.http.get<ResponseApiAlticciSequence>("http://localhost:8080/alticci/" + n);
  }

  clearCache(): Observable<any>{
    return this.http.delete<any>("http://localhost:8080/alticci/clear-cache");
  }

}
