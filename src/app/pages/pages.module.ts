import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentsModule } from '../contents';
import { WidgetsModule } from '../widgets';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  HomeComponent,
  LoginComponent,
  NoContentComponent,
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
