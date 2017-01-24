import { Component, OnInit, } from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`pg-detail` component loaded asynchronously');

@Component({
  selector: 'pg-detail',
  templateUrl: './pg-detail.component.pug',
  styleUrls: ['./pg-detail.component.less'],
})
export class PgDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('`pg-detail` component ngOnInit');
  }

}
