import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cita } from '../../models/cita';
import { CitaServiceService } from '../../services/cita-service.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  citas: Cita[]=[];
  formulario!: FormGroup;
  modal!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private citaServiceService : CitaServiceService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getCitas();
  }

  //Listar Citas
  getCitas(): void{

    this.citaServiceService.list().subscribe(
      data =>{
        this.citas =data;
        console.log(this.citas);

      },
      err =>{
        console.log("error listar");

      }
    );

  }

  //Eliminar Citas

  eliminar(id: string):void{
    Swal.fire({
      title: 'Eliminar',
      text: "Desea eliminar la Cita?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("eliminando " + id);
        this.citaServiceService.eliminar(id).subscribe(
          data =>{
            this.getCitas();

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

  //Modificar Citas

  update():void{
    const data = this.formulario.value ;
    console.log(data);
    this.citaServiceService.modificar(data)
    .subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Modifico  con exito',
        showConfirmButton: false,
        timer: 1300
      });
      this.getCitas();
      this.formulario.reset();
    })
  }
  modificarCita(id:any){
    const citaData =  this.citaServiceService.detail(id).subscribe(cdata =>{
      this.citaServiceService.modificar(cdata);
      this.formulario = this.formBuilder.group({
        id:[cdata.id],
        fecha:[cdata.fecha],
        hora:[cdata.hora],
        nombre: [cdata.nombre],
        telefono: [cdata.telefono],
        tipoCita: [cdata.tipoCita],
        estadoCita:[cdata.estadoCita]
      });
    });
}


//crear Cita
  guardar( ):void{
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
        this.getCitas();
        this.formulario.reset();
      console.log(data);
    });
  }



//Crear Formulario

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
//Budcar Cita por id
getCitaporid(id: string){
  this.citaServiceService.detail(id).subscribe(data=>{
  console.log(data);
  });
  }



}




