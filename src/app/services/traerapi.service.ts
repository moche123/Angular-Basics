import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class TraerapiService {

  constructor(
    private _http: HttpClient
  ) { }
  getApi(): Observable<User[]>{
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
