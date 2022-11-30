export class Paciente {

  id!: string;
  nombre:string;
  telefono: string;
  correo: string;

  constructor(nombre:string, telefono: string, correo: string ){
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
  }


}
