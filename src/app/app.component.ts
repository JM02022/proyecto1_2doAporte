import { Component } from '@angular/core';
import * as datos from './ts/Asistencia'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AULA VIRTUAL';
  //alumnos
  alumno :datos.Alumno = {
    codAlumno: "A1",
    nombreA: "Sergio",
    apellidoPA: "Pantoja",
    apellidoMA: "Puma",
    fechaNacimientoA: "2000/01/01"
  }
  alumno2 :datos.Alumno = {
    codAlumno: "A2",
    nombreA: "Henry",
    apellidoPA: "Salazar",
    apellidoMA: "Quispe",
    fechaNacimientoA: "2000/03/02"
  }

  //detalles de alumnos
  detalleE :datos.DetalleEstudiante = {
    niveldeEstudioD: "primaria",
    gradoD: "4er grado",
    alumnoD: this.alumno
  }
  detalleE2 :datos.DetalleEstudiante = {
    niveldeEstudioD: "primaria",
    gradoD: "4er grado",
    alumnoD: this.alumno2
  }

  //datos docente
  docente: datos.Docente = {
    codDocenteD: "D1",
    nombreD: "Dushan",
    apellidoPD: "Quillahuaman",
    apellidoMD: "Titto",
    nivelCargoEstudiantes: "4to grado de primaria"
  };

  //datos aula
  aula: datos.Aula = {
    codAula: "AU1",
    numeroAula: 1
  }

  //registrosDeAsistencias
  sesion1: datos.RegistroAsistencia = {
    codRA: "S1",
    nroSesionRA: 1,
    fechaRA: "08/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "I"
  }
  sesion2: datos.RegistroAsistencia = {
    codRA: "S2",
    nroSesionRA: 2,
    fechaRA: "09/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "I"
  }
  sesion3: datos.RegistroAsistencia = {
    codRA: "S3",
    nroSesionRA: 3,
    fechaRA: "10/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "I"
  }
  
  //listas de alumnos, asistencias, registros de asistencias
  public rpta:string[] = ["asistio","tardanza","no asistio"];
  public alumnos: datos.Alumno[] = [this.alumno,this.alumno2];
  public asistencias: datos.Asistencia[] = [];
  public registroAsistencias: datos.RegistroAsistencia[] = [this.sesion1,this.sesion2,this.sesion3];
  aux:number = 0;
  //metodos
  getNombreDocente():string {
    return this.docente.nombreD + " " + this.docente.apellidoPD + " " + this.docente.apellidoMD
  };
  cargarRegistro(i:number): void{
    this.aux = i;
  }
  mostrarFecha(){
    return this.registroAsistencias[this.aux].fechaRA;
  }
  guardarAsistencia(i:number,j:number):void{
    if(this.asistencias.includes(this.asistencias[i]) ){
      this.asistencias[i].estado = this.rpta[j];
    }
    else{
      this.asistencias.push({
        fechaAsistencia: this.mostrarFecha(),
        alumnoAsistencia: this.alumnos[i],
        aulaAsistecia:this.aula,
        estado: this.rpta[j],
    })
    }
    console.log(this.asistencias);
    console.log(this.mostrarFecha());
  }
}