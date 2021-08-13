import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/actual', { responseType: 'json' });;
  }


  crearUsuario(user): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/usuarios',{
      username: user.username,
      correo: user.correo,
      password: user.password,
      rol_id: user.rol_id,
      sexo: user.sexo,
      telefono: user.telefono,
      curso: user.curso,
      rut: user.rut
    }, { responseType: 'json' });;
  }

  getUsuarios(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/usuarios', { responseType: 'json' });;
  }

 
  getNoticias(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/ultimasNoticias', { responseType: 'json' });;
  }

}
