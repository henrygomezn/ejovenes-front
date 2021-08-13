import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VotosService {

  constructor(private http: HttpClient) { }



  validarVoto(usuario_id,cuento_id,concurso_id): Observable<any> {
  


    return this.http.post(environment.API_URL + 'api/v1/verificarVoto',{
      competidor_id: cuento_id,
      concurso_id: concurso_id,
      usuario_id: usuario_id
    }, { responseType: 'json' });;
  }

  crearVoto(usuario_id,cuento_id,concurso_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/voto',{
      usuario_id: usuario_id,
      concurso_id: concurso_id,
      competidor_id: cuento_id
   
    }, { responseType: 'json' });;
  }

  getVotos(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/voto', { responseType: 'json' });;
  }


}
