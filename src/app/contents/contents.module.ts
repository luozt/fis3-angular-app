import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../widgets';
import { AuthComponent } from './auth';
import { FooterBarComponent } from './footer-bar';
import { HomeOperateComponent } from './home-operate';
import { NotFoundComponent } from './not-found';
import { NavigationComponent } from './navigation';
import { WelcomeComponent } from './welcome';

import { PipesModule } from '../pipes';
import { DirectivesModule } from '../directives';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  AuthComponent,
  FooterBarComponent,
  HomeOperateComponent,
  NotFoundComponent,
  NavigationComponent,
  WelcomeComponent,
];

const moduleList = [
  PipesModule,
  DirectivesModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, WidgetsModule, ...moduleList],
  declarations: [
    ...componentsList
  ],
  exports: [
    ...componentsList
  ]
})
export class ContentsModule {
}
