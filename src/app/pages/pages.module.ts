import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentsModule } from '../contents';
import { PgHomeComponent } from './pg-home';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  PgHomeComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ContentsModule],
  declarations: [
     ...componentsList
  ],
  exports: [
     ...componentsList
  ],
})
export class PagesModule {
}
