import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [NgOptimizedImage],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  nombre = 'Eliel Jesús García Vela';
  ciudad = 'Málaga, Campanillas';
  telefono = '34+ 637247179';
  correo = 'elieljgarciavela@gmail.com';
  github = 'https://github.com/ElielJesusGarciaVela';
  idiomas = 'Español, English (C1)';

  mostrarContacto = false;

  toggleContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }
}
