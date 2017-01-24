import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets';
import { AuthComponent } from './auth';
import { FooterBarComponent } from './footer-bar';
import { HoOperateComponent } from './ho-operate';
import { NotFoundComponent } from './not-found';
import { NavigationComponent } from './navigation';
import { WelcomeComponent } from './welcome';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  AuthComponent,
  FooterBarComponent,
  HoOperateComponent,
  NotFoundComponent,
  NavigationComponent,
  WelcomeComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, WidgetsModule],
  declarations: [
    ...componentsList
  ],
  exports: [
    ...componentsList
  ]
})
export class ContentsModule {
}
