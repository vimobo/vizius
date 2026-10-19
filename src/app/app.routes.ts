import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Development } from './pages/development/development';
import { Music } from './pages/music/music';
import { Login } from './pages/login/login';
import { Bookings } from './pages/bookings/bookings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dev', component: Development },
  { path: 'music', component: Music },
  { path: 'login', component: Login },
  { path: 'bookings', component: Bookings },
  { path: '**', redirectTo: '' }
];