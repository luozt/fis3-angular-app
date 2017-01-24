import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

  controlData = {
    navigation: null,
  };

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State');
    this.initControls();
  }

  initControls(){
    this.controlData.navigation = {
      type: 'router', // unset | router
      items: [
        {
          routerLink: ['./home'],
          routerLinkActive: 'active',
          text: '首页'
        }, {
          routerLink: ['./login'],
          routerLinkActive: 'active',
          text: '登录'
        }, {
          routerLink: ['./detail'],
          routerLinkActive: 'active',
          text: '详情页'
        }
      ]
    };
  }

}
