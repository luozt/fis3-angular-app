import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  controlData = {
    auth: null,
  }

  constructor(
    private router: Router
    ){}

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.auth = {
      username: {
        label: '账号',
        placeholder: '请输入您的账号',
        value: ''
      },
      password: {
        label: '密码',
        placeholder: '请输入您的密码',
        value: ''
      },
      submitText: '登录',
      // 提供的回调
      onSubmit: ()=>{
        let auth = this.controlData.auth;
        if(auth.username.value && auth.password.value){
          this.router.navigate(['home']);
        }else{
          alert('请输入您的账号和密码');
        }
      }
    };
  }
}
