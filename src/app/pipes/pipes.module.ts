import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyDatePipe } from './mydate.pipe';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const pipesList = [
  MyDatePipe,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ...pipesList
  ],
  exports: [
    ...pipesList
  ]
})
export class PipesModule {
}
