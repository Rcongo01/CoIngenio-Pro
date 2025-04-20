// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyecto/proyectos.component'; // Importa tu componente
import { SidebarComponent} from './sidebar/sidebar.component';
import { CronogramaComponent } from './Cronograma/cronograma.component';
import { MaterialesComponent } from './Materiales/materiales.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'cronograma', component: CronogramaComponent },
  { path: 'materiales', component: MaterialesComponent },
];
