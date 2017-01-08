import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  controlData = {
    welcome: null,
    hoOperate: null,
  }

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.welcome = {
      title: '欢迎来到fis3 angular2 app!',
      greeting: '这是由LUOZHITAO研发的一个基于fis3开发的Angular2框架。',
    };
    this.controlData.hoOperate = {
      btnText: '去登录',
      onClickBtn: ()=>{
        window.alert('点击去登录！')
      }
    };
  }
}
