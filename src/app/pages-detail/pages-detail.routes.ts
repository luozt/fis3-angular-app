import { DetailComponent } from './detail';
import { DetailChildComponent } from './detail-child';

export const routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
      {
        path: 'child',
        component: DetailChildComponent
      }
    ]
  }
];
