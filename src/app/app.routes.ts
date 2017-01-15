import { Routes, RouterModule } from '@angular/router';
import { PgHomeComponent } from './pages/pg-home';
// import { LoginComponent } from './pages/login';
// import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '',      component: PgHomeComponent },
  { path: 'home',  component: PgHomeComponent },
  // { path: 'login',  component: LoginComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: '**',    component: NoContentComponent },
];
