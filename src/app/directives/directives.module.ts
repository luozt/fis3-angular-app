import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ColorifyDirective } from './colorify.directive';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const directivesList = [
  ColorifyDirective,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ...directivesList
  ],
  exports: [
    ...directivesList
  ]
})
export class DirectivesModule {
}
