import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  seccion = input<string>('resumen');

  tecnologiaSeleccionada: string = '';

  tecnologias = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java', 'Kotlin'
  ];

  experiencias = [
    {
      id: 1,
      empresa: 'Erasmus 2025',
      puesto: 'Desarrollador en prácticas',
      periodo: '2025',
      descripcion: 'Prácticas en República Checa, Praga, en 2025 con el programa Erasmus.'
    },
    {
      id: 2,
      empresa: 'REWE Digital',
      puesto: 'Programador ABAP / SAP',
      periodo: '2026',
      descripcion: 'Prácticas en REWE Digital como programador de ABAP y manejo de SAP.'
    }
  ];

  seleccionarTecnologia(tech: string): void {
    this.tecnologiaSeleccionada = tech;
  }
}
