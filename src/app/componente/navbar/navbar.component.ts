import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string;
  imagen: string;
  constructor(){
    this.titulo = "Trabajo Practico";
    this.imagen = "https://i.pinimg.com/736x/45/bb/92/45bb92a9363c8e5b06f371feb283b6fa.jpg";
  }
  
  


}
