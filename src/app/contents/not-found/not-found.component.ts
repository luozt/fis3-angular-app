import { Component, Input } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.pug',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent {
  @Input() data = {
    title: 'Sorry! Page Not Found!',
    details: ''
  };
}
