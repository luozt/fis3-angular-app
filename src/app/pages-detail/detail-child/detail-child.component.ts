import { Component, OnInit, } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`detail-child` component loaded asynchronously');

@Component({
  selector: 'detail-child',
  templateUrl: './detail-child.component.pug',
  styleUrls: ['./detail-child.component.less'],
})
export class DetailChildComponent implements OnInit {

  public ngOnInit() {
    console.log('`detail-child` component ngOnInit');
  }

}
