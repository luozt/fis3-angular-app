
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { NocontentComponent } from './nocontent';

export const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'detail',
        loadChildren: function(){
          return require('../pages-detail').PagesDetailModule;
        }
      }
    ]
  }, {
    path: '**',
    component: NocontentComponent
  },
];
