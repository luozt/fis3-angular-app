import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppButtonComponent } from './app-button';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  AppButtonComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ...componentsList
  ],
  exports: [
    ...componentsList
  ]
})
export class WidgetsModule {
}
