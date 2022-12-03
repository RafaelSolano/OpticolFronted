import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacientesURL =environment.apiRestURL+'/pacientes';


  constructor(private httpClient: HttpClient ) { }

  public list(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.pacientesURL);
  }

  public eliminar(id: string): Observable<any>{
    return this.httpClient.delete<Paciente>(this.pacientesURL+`/${id}`);
  }

  public save(data: Partial<Paciente>):Observable<any>{
    return this.httpClient.post<Paciente>(this.pacientesURL, data);
  }
  public modificar( id: string, data: Partial<Paciente>):Observable<any>{
    return this.httpClient.put<Paciente>(this.pacientesURL+`/${id}`, data);
  }

  public detail(id: string): Observable<any>{
    return this.httpClient.get<Paciente>(this.pacientesURL+`/${id}`);
  }

}
