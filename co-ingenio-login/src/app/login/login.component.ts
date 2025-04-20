import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private router: Router) {} // ✅ No te olvides del constructor con el router

  iniciarSesion() {
    // Por ahora simulamos un login exitoso si hay datos
    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.mensaje = 'Por favor ingresa usuario y contraseña';
    }
  }
}


