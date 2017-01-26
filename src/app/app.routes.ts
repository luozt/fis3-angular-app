import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail', loadChildren: function(){
    return require('./pages/detail').DetailModule;
  }},
  { path: '**', component: NoContentComponent },
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
