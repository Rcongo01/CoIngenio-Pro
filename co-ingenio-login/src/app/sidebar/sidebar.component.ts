import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  goTo(route: string): void {
    this.router.navigate([route]);  // Redirige a la ruta pasada
  }
}
