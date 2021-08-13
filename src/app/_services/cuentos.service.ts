import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';



const CUENTO_KEY = 'auth-cuento';


@Injectable({
  providedIn: 'root'
})
export class CuentosService {

  constructor(private http: HttpClient) { }

  getCuentos(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/competidor', { responseType: 'json' });;
  }


  getConcursos(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/concurso', { responseType: 'json' });;
  }


  getMasVotados(): Observable<any> {

    return this.http.get(environment.API_URL + 'api/v1/masVotados', { responseType: 'json' });;
  }



  getMisCuentos(user_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/misParticipaciones',{
      usuario_id: user_id
    }, { responseType: 'json' });;
  }


  obtenerFicha(cuento_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/mostrarFicha',{
      id: cuento_id
    }, { responseType: 'json' });;
  }

  
  eliminarCuento(cuento_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/eliminarCuento',{
      id: cuento_id
    }, { responseType: 'json' });;
  }

  contadorVotos(cuento_id): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/contadorVotos',{
      id: cuento_id
    }, { responseType: 'json' });;
  }

  crearCuento(cuento): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/competidor',{
      titulo: cuento.titulo,
      autor: cuento.autor,
      descripcion: cuento.descripcion,
      usuario_id: cuento.usuario_id,
      concurso_id: cuento.concurso_id,
      contVotos: cuento.contVotos,
      cover_picture: cuento.cover_picture
    
    }, { responseType: 'json' });;
  }


  getUltCuentos(): Observable<any> {
    return this.http.post(environment.API_URL + 'api/v1/ultimosCompetidores', { responseType: 'json' });
  }


  porTitulos(cadena): Observable<any> {

    return this.http.post(environment.API_URL + 'api/v1/buscarxTitulo',{
      titulo: cadena
    }, { responseType: 'json' });;
  }

  public saveCuento(id:string): void {
    window.sessionStorage.removeItem(CUENTO_KEY);
    window.sessionStorage.setItem(CUENTO_KEY,id);  
  
  }

  public getCuento(): any {
    return sessionStorage.getItem(CUENTO_KEY);
  }
}
