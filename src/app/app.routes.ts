import { AppComponent } from './app.component';

export const routes = [
  { path: '', component: AppComponent },
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
