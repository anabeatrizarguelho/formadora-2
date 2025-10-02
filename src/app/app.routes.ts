import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pagina-2',
    loadComponent: () => import('./pagina-2/pagina-2.page').then( m => m.Pagina2Page)
  },
  {
    path: 'pagina-3',
    loadComponent: () => import('./pagina-3/pagina-3.page').then( m => m.Pagina3Page)
  },
];
