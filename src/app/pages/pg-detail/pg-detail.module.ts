import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './pg-detail.routes';
import { PgDetailComponent } from './pg-detail.component';

console.log('`pg-detail` module loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PgDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PgDetailModule {
  public static routes = routes;
}
