import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.pug',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {
  @Input() data = {
    title: '',
    greeting: '',
  };
}
