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
}
