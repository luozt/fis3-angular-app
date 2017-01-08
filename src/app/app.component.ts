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
      // type: 'router', // unset | router
      items: [{
        href: '#',
        text: '首页'
      },{
        href: '#1',
        text: '测试页'
      },]
    };
  }

}
