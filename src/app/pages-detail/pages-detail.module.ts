import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DetailComponent } from './detail';
import { DetailChildComponent } from './detail-child';

import { ContentsModule } from '../contents';
import { WidgetsModule } from '../widgets';
import { routes } from './pages-detail.routes';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  DetailComponent,
  DetailChildComponent,
];

const moduleList = [
  ContentsModule,
  WidgetsModule,
  RouterModule.forChild(routes),
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ...moduleList],
  declarations: [
     ...componentsList
  ],
  exports: [
     ...componentsList
  ],
})
export class PagesDetailModule {
}
