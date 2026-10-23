import { Component } from '@angular/core';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';

@Component({
  selector: 'app-root',
  imports: [MainlayoutComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  seccionActiva = 'resumen';

  cambiarSeccion(seccion: string): void {
    this.seccionActiva = seccion;
  }
}
