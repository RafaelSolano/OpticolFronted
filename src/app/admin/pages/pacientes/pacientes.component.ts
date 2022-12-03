import { Component, OnInit,   } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],

})
export class PacientesComponent implements OnInit {
  formulario!: FormGroup ;
  pacientes: Paciente[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private router :Router,
    )

    {
      this.buildForm();

    }

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
  //Modificar Paciente
  modificarPaciente(id:string):void{
    this.pacienteService.detail(id).subscribe(data =>{

    this.formulario = this.formBuilder.group({

      nombre: [data.nombre],
      telefono: [data.telefono],
      correo: [data.correo],
    });
    this.pacienteService.modificar(id,data);
    })
  }

  guardar():void{
    this.crearPaciente();


  }

  //Crear paciente
  private crearPaciente(){
    const data = this.formulario.value ;
    this.pacienteService.save(data)
    .subscribe(
      data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se Agrago con exito',
          showConfirmButton: false,
          timer: 1300
        });
        this.getPacientes();
        this.formulario.reset();
      console.log(data);
    });
  }




  private buildForm(){
    this.formulario = this.formBuilder.group({
      nombre: [''],
      telefono: [''],
      correo: [''],
    });

  }


  getPacienteporid(id: string){
   this.pacienteService.detail(id).subscribe(data=>{
  console.log(data);
   });
  }



}
