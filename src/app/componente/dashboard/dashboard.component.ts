import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;
  contenido: string;
  alumnos: string;

  constructor() {
    this.titulo = "ANGULAR";
    this.contenido = "Es un framework de codigo abierto y permite desarrollar paginas web de una sola pagina.";
    this.alumnos = "Ana Paula Moyano"
    
   
  }
  }
