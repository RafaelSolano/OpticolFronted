import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/paciente';
import { Observable } from 'rxjs';

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
}
