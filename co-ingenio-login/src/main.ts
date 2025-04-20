import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // ✅ Agregá esta línea
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ Y esta también

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // ✅ Acá incluimos las rutas
  ]
});
