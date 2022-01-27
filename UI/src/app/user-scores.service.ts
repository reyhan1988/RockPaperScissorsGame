import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScoresService {

  private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

/**
 * 
 * @param id 
 * send the human id choise to the backend part and get the winner name and bot choise. 
 * @returns 
 */
  public doPlay(id : number):Observable<any>{
    return this.http.get(`${this.baseUrl+"/"+id}`);
  }
  // getWinner(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

}
