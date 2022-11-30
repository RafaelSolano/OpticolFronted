import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[]=[];

  constructor(
    private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(): void{
    this.pacienteService.list().subscribe(
      data =>{
        this.pacientes =data;
        console.log(this.pacientes);

      },
      err =>{
        console.log("error listar");

      }
    );

  }



}
