import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaServiceService {

  citasURL = environment.apiRestURL+'/citas';


  constructor(private httpClient: HttpClient ) { }

  public list(): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(this.citasURL);
  }

  public eliminar(id: string): Observable<any>{
    return this.httpClient.delete<Cita>(this.citasURL+`/${id}`);
  }

  public save(data: Partial<Cita>):Observable<any>{
    return this.httpClient.post<Cita>(this.citasURL, data);
  }
  public modificar( data: Partial<Cita>):Observable<any>{
    return this.httpClient.put<Cita>(this.citasURL, data);
  }

  public detail(id: string): Observable<any>{
    return this.httpClient.get<Cita>(this.citasURL+`/${id}`);
  }

}
