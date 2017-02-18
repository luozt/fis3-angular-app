import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  controlData = {
    welcome: null,
    homeOperate: null,
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){}

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.welcome = {
      title: '欢迎来到fis3 angular2 app!',
      greeting: '这是一个基于fis3开发的Angular2框架。',
      greetingColor: 'blue'
    };
    this.controlData.homeOperate = {
      btnText: '去登录',
      onClickStart: ()=>{
        this.router.navigate(['login']);
      },
      onClickOpen: ()=>{
        this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
      }
    };
  }
}
