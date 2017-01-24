import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.pug',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  @Input() data = {
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
    onSubmit: ()=>{}
  };

  controlData = {
    appBtn: null
  };

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.appBtn = {
      type: 'primary',
      text: this.data.submitText,
      onClick: this.data.onSubmit
    };
  }

  submit(event){
    event.preventDefault();
    if(this.data.onSubmit){
      this.data.onSubmit();
    }
    return false;
  }
}
