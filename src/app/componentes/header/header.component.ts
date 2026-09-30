import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, NgOptimizedImage, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
