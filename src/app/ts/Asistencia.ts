export interface Alumno{
    codAlumno:string,
    nombreA:string,
    apellidoPA:string,
    apellidoMA:string,
    fechaNacimientoA:string
}
export interface Docente{
    codDocenteD:string,
    nombreD:string,
    apellidoPD:string,
    apellidoMD:string,
    nivelCargoEstudiantes: string
}
export interface Asistencia{
    fechaAsistencia: string,
    alumnoAsistencia:Alumno,
    aulaAsistecia:Aula,
    estado: string,
    modificacionesA?:number|string
}
export interface Aula{
    codAula:string,
    numeroAula:number
}
export interface DetalleEstudiante{
    niveldeEstudioD:string,
    gradoD:string,
    alumnoD:Alumno
}
export interface RegistroAsistencia{
    codRA :string,
    nroSesionRA: number,
    fechaRA: string,
    horaInicio: string,
    horaFin: string,
    Unidad: string,
    docenteRA: Docente,
    boton:boolean 
}
//a