import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail-child.routes';
import { DetailChildComponent } from './detail-child.component';

console.log('`detail-child` module loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailChildModule {
  public static routes = routes;
}
