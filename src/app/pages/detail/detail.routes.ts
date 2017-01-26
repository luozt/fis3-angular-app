import { DetailComponent } from './detail.component';

export const routes = [
  { path: '', component: DetailComponent, children: [
    // { path: '', component: DetailComponent },
    { path: 'detail-child', loadChildren: function(){
      return require('../detail-child').DetailChildModule;
    }}
  ]},
];
