import { Component, OnInit,   } from '@angular/core';
import Swal from 'sweetalert2';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],

})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[]=[];

  constructor(
    private pacienteService: PacienteService)

    { }

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
  eliminar(id: string):void{
    Swal.fire({
      title: 'Eliminar',
      text: "Desea eliminar un paciente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("eliminando " + id);
        this.pacienteService.eliminar(id).subscribe(
          data =>{
            this.getPacientes();

          }
        );
        Swal.fire(
          'Elimanado!',
          'le paciente fue eliminado',
          'success'
        )

      }
    })

  }



}
