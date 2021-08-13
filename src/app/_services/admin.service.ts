import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getDashboard(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/dashboard', { responseType: 'json' });;
  }

  getNoticias(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/notice', { responseType: 'json' });;
  }



  eliminarUsuario(user_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/eliminarUsuario',{
      id: user_id
    }, { responseType: 'json' });;
  }

  eliminarConcurso(concurso_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/eliminarConcurso',{
      id: concurso_id
    }, { responseType: 'json' });;
  }


  crearNoticia(noticia): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/notice',{
      titulo: noticia.titulo,
      cuerpo: noticia.cuerpo
     
    }, { responseType: 'json' });;
  }


  crearConcurso(concurso): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/concurso',{
      nombre: concurso.nombre,
      descripcion: concurso.descripcion
     
    }, { responseType: 'json' });;
  }


  eliminarNoticia(noticia_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/eliminarNoticia',{
      id: noticia_id
    }, { responseType: 'json' });;
  }



}
