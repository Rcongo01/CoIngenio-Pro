import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';  // Importa SidebarComponent

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {
    busqueda: string = '';
  
    materiales = [
      { nombre: 'Varillas', stock: 'Alto' },
      { nombre: 'Pintura', stock: 'Bajo' },
      { nombre: 'Estribos', stock: 'Bajo' }
    ];
    constructor(private router: Router) {}
    materialesFiltrados() {
      if (!this.busqueda.trim()) return this.materiales;
      return this.materiales.filter(mat =>
        mat.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  
    anadirMaterial() {
      console.log("Añadir material...");
      // lógica para añadir material
    }
  
    eliminar() {
      console.log("Eliminar material...");
      // lógica para eliminar
    }
  
    verDetalle() {
      console.log("Ver detalle...");
      // lógica para mostrar detalle
    }
    goTo(path: string) {
        this.router.navigate(['/' + path]);
      }
  }

