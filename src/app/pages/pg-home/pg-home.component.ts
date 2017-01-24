import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pg-home',
  templateUrl: './pg-home.component.pug',
  styleUrls: ['./pg-home.component.less']
})
export class PgHomeComponent {
  controlData = {
    welcome: null,
    hoOperate: null,
  }

  constructor(
    private router: Router
    ){}

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.welcome = {
      title: '欢迎来到fis3 angular2 app!',
      greeting: '这是一个基于fis3开发的Angular2框架。',
    };
    this.controlData.hoOperate = {
      btnText: '去登录',
      onClickBtn: ()=>{
        this.router.navigate(['login']);
      }
    };
  }
}
