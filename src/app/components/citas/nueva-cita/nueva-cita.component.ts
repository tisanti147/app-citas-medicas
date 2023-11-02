import { cita } from './../../../interfaces/cita';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.css']
})
export class NuevaCitaComponent{
  cita:cita = {
    nombrePaciente:'',
    fechaCita:'',
    horaCita:'',
    sintomas:'',
    id: 0
  }

  agregarCita(){
    console.log(this.cita);
  }
}
