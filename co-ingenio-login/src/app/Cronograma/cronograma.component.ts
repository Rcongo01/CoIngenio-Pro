import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';  // Importa SidebarComponent
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  imports: [SidebarComponent, CommonModule, FormsModule],
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent {
  busqueda: string = '';
  proyectoSeleccionado: any = null;

  proyectos = [
    { nombre: 'Proyecto A', categoria: 'Instalación', tareas: 13, activo: true },
    { nombre: 'Proyecto B', categoria: 'Modificación', tareas: 14, activo: false },
    { nombre: 'Proyecto C', categoria: 'Mantenimiento', tareas: 15, activo: true },
  ];

  tareas = [
    { nombre: 'Instalación', estado: 'Planificado' },
    { nombre: 'Modificación', estado: 'Planificado' },
    { nombre: 'Instalación', estado: 'Planificado' },
  ];

  constructor(private router: Router) {}

  proyectosFiltrados() {
    if (!this.busqueda.trim()) return this.proyectos;
    return this.proyectos.filter(p =>
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      p.categoria.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  seleccionarProyecto(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    this.tareas = [
      { nombre: 'Tarea 1', estado: 'Planificado' },
      { nombre: 'Tarea 2', estado: 'Planificado' },
      { nombre: 'Tarea 3', estado: 'Planificado' },
    ];
  }
  crearTarea() {
    console.log('Crear tarea clickeado');
    // Aquí iría la lógica real que desees
  }

  eliminarTarea() {
    if (this.proyectoSeleccionado) {
      const confirmacion = confirm(`¿Está seguro de eliminar las tareas del proyecto ${this.proyectoSeleccionado.nombre}?`);
      if (confirmacion) {
        this.tareas = [];
      }
    } else {
      alert('Seleccione un proyecto para eliminar tareas.');
    }
  }

  // 👇 FUNCIONALIDAD DE NAVEGACIÓN
  goTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
