import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
@Component({
  selector: 'app-pacienteform',
  templateUrl: './pacienteform.component.html',
  styleUrls: ['./pacienteform.component.scss']
})
export class PacienteformComponent  implements OnInit{

  formulario!: FormGroup ;


  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ){
    this.buildForm();

  }
  ngOnInit(): void {
    }

  guardar():void{
    this.crearPaciente();
  }

  private crearPaciente(){
    const data = this.formulario.value ;
    this.pacienteService.save(data)
    .subscribe(data=>{
      console.log(data);

    }
    );

  }
  private buildForm(){
    this.formulario = this.formBuilder.group({
      nombre: [''],
      telefono: [''],
      correo: [''],
    });

  }


}



