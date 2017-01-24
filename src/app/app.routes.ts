import { Routes, RouterModule } from '@angular/router';
import { PgHomeComponent } from './pages/pg-home';
import { PgLoginComponent } from './pages/pg-login';
import { Pg404Component } from './pages/pg-404';

export const ROUTES: Routes = [
  { path: '',      component: PgHomeComponent },
  { path: 'home',  component: PgHomeComponent },
  { path: 'login',  component: PgLoginComponent },
  { path: 'detail', loadChildren: function(){
    return require('./pages/pg-detail').PgDetailModule;
  }},
  { path: '**',    component: Pg404Component },
];

/**
 * Webpack loadChildren写法
 */

/*
{
  path: 'about', loadChildren: () => new Promise(resolve=>{
    (require as any).ensure([], (require: any)=>{
      resolve(require('./about/about.module').AboutModule);
    })
  })
}
*/
