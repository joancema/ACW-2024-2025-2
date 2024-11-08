import { Routes } from '@angular/router';
import { FlagsComponent } from './pages/flags/flags.component';
import { FlagComponent } from './pages/flag/flag.component';

export const routes: Routes = [
  {
    path: 'flags',component: FlagsComponent
  },
  {
    path:'flags/:id',component: FlagComponent
  }
];
