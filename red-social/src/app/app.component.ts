import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'red-social';
  mostrarMensaje = true;
  materias: string[] =[
    'Gestión del proceso de desarrollo de software',
    'Aplcaciones web progresivas',
    'Integradora',
    'Desarrollo móvil integral',
    'Optativa 1: Creación de videojuegos',
    'Negociación empresarial',
    'Inbglés IX'
  ];
  contador = 0;
}
