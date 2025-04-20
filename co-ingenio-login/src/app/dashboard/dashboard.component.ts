import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';  // Importa SidebarComponent
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [SidebarComponent, CommonModule, FormsModule],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('materialChart') materialChartCanvas!: ElementRef;
  @ViewChild('projectChart') projectChartCanvas!: ElementRef;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      new Chart(this.materialChartCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Usado', 'Disponible'],
          datasets: [{
            data: [40, 60],
            backgroundColor: ['#a2c2cf', '#007bff']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      new Chart(this.projectChartCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Activos', 'Finalizados', 'Pendientes'],
          datasets: [{
            label: 'Proyectos',
            data: [5, 3, 2],
            backgroundColor: ['#007bff', '#a2c2cf', '#343a40']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }

  // 👇 FUNCIONALIDAD DE NAVEGACIÓN
  goTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
