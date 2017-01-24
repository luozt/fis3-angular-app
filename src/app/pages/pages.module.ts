import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentsModule } from '../contents';
import { WidgetsModule } from '../widgets';
import { PgHomeComponent } from './pg-home';
import { PgLoginComponent } from './pg-login';
import { Pg404Component } from './pg-404';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  PgHomeComponent,
  PgLoginComponent,
  Pg404Component
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ContentsModule, WidgetsModule],
  declarations: [
     ...componentsList
  ],
  exports: [
     ...componentsList
  ],
})
export class PagesModule {
}
