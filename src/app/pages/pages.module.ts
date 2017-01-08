import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentsModule } from '../contents';
import { HomeComponent } from './home';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  HomeComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ContentsModule],
  declarations: [
  ].concat(componentsList),
  exports: [
  ].concat(componentsList),
})
export class PagesModule {
}
