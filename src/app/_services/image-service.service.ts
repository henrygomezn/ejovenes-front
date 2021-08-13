import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }

  public uploadImage(image: File, cuento_id): Observable<any> {
    const formData = new FormData();
    formData.append('cover_picture', image);
    
    return this.http.put(environment.API_URL + 'api/v1/competidor/'+ cuento_id, formData ,{ responseType: 'json' } );
  }

  public uploadPdf(image: File, cuento_id): Observable<any> {
    const formData2 = new FormData();
    formData2.append('cover_pdf', image);
    
    return this.http.put(environment.API_URL + 'api/v1/competidor/'+ cuento_id, formData2 ,{ responseType: 'json' } );
  }


}
