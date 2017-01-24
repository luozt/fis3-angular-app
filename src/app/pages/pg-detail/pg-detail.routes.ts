import { PgDetailComponent } from './pg-detail.component';

export const routes = [
  { path: '', component: PgDetailComponent, children: [
    // { path: '', component: PgDetailComponent },
    { path: 'detail-child', loadChildren: function(){
      return require('../pg-detail-child').PgDetailChildModule;
    }}
  ]},
];
