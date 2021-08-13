import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    console.log("llega aca3");
    return this.http.post(environment.API_URL + 'api/v1/login', {
      correo: credentials.correo,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(environment.API_URL+ 'api/v1/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
