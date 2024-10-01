import { Routes } from '@angular/router';
import { CiudadanoComponent } from './pages/ciudadano/ciudadano.component';

export const routes: Routes = [
  {
    // localhost:4200/ciudadanos
    path: 'ciudadanos',
    component: CiudadanoComponent
  }
];
