import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.pug',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  @Input() data = {
    type: 'router', // unset | router
    items: [{
      routerLink: ['./home'],
      routerLinkActive: 'active',
      text: '链接'
    }]
  };
}
