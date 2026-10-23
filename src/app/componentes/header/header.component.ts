import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Eliel Jesús García Vela';
  seccionActual = 'resumen';

  seccionSeleccionada = output<string>();

  seleccionar(seccion: string): void {
    this.seccionActual = seccion;
    this.seccionSeleccionada.emit(seccion);
  }
}
