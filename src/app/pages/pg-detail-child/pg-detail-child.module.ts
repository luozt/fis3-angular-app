import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './pg-detail-child.routes';
import { PgDetailChildComponent } from './pg-detail-child.component';

console.log('`pg-detail-child` module loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PgDetailChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PgDetailChildModule {
  public static routes = routes;
}
