import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;
  tituloPB: string;
  tituloEB: string;
  contenido: string;
  alumnos: string;
  profesor: string;
  imagen: string;
  textoEB: string;


  constructor() {
    this.titulo = "ANGULAR";
    this.contenido = "Es un framework de codigo abierto y permite desarrollar paginas web de una sola pagina.";
    this.alumnos = "Ana Paula Moyano";
    this.profesor = "Nicolas Vassallo"
    this.tituloPB = "PROPERTY BINDING";
    this.imagen = "https://www.mediasource.mx/hubfs/blog-files/fondos-web.jpg#keepProtocol";
    this.tituloEB = "EVENT BINDING";
    this.textoEB = "Integrantes";
  
  }
  cambiartexto() {
    this.textoEB = "Ana Moyano";
  }


  }
