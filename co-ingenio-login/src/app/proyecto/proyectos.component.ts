import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';  // Importa SidebarComponent

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  busqueda = '';
  proyectos = [
    { nombre: 'Proyectos A', estado: 'En Progreso' },
    { nombre: 'Proyectos B', estado: 'Culminado' },
    { nombre: 'Proyectos C', estado: 'Planificado' }
  ];

  constructor(private router: Router) {}

  proyectosFiltrados() {
    return this.proyectos.filter(p => 
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  crearProyecto() {
    this.router.navigate(['/crear-proyecto']); // Asegúrate de tener esta ruta
  }

  eliminarProyecto() {
    // Aquí puedes implementar lógica para eliminar uno seleccionado
    alert('Funcionalidad de eliminar no implementada aún.');
  }

  irADetalle() {
    this.router.navigate(['/detalle-proyecto']); // Asegúrate de tener esta ruta
  }
    // 👇 FUNCIONALIDAD DE NAVEGACIÓN
    goTo(path: string) {
      this.router.navigate(['/' + path]);
    }
}
