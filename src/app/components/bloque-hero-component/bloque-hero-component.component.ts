import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitasComponent } from 'src/app/admin/pages/citas/citas.component';
import { CitaServiceService } from 'src/app/admin/services/cita-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bloque-hero-component',
  templateUrl: './bloque-hero-component.component.html',
  styleUrls: ['./bloque-hero-component.component.scss']
})
export class BloqueHeroComponentComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    public citaServiceService :CitaServiceService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  save(){
  this.crearCita();
  }


  //Crear cita
  private crearCita(){
    const data = this.formulario.value ;
    this.citaServiceService.save(data)
    .subscribe(
      data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se Agrego con exito',
          showConfirmButton: false,
          timer: 1300
        });
      console.log(data);
    });
  }



private buildForm(){
  this.formulario = this.formBuilder.group({
    fecha:[''],
    hora:[''],
    nombre: [''],
    telefono: [''],
    tipoCita: [''],
    estadoCita:['']
  });

}



}
