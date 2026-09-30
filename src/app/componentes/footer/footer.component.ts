import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  title = 'cv';
  nombre = 'Eliel Jesús García Vela';
  ciudad = 'Málaga, Campanillas'
  telefono = '34+ 637247179'
  correo = 'elieljgarciavela@gmail.com'
  github = 'https://github.com/ElielJesusGarciaVela'
  idiomas = 'Español, English (C1)'
  tecnologias = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Java',
  'Kotlin'
];
date = new Date();
}
