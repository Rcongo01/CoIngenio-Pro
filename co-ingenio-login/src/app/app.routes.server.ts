import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',  // Asegúrate de que todas las rutas se rendericen correctamente
    renderMode: RenderMode.Prerender
  }
];
