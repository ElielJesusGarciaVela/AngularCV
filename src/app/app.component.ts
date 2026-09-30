import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainlayoutComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
