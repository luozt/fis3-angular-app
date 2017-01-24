import { Component, Input } from '@angular/core';

/**
 * ho-operate这个命名
 * 它实际上等于home-operate
 */
@Component({
  selector: 'ho-operate',
  templateUrl: './ho-operate.component.pug',
  styleUrls: ['./ho-operate.component.less']
})
export class HoOperateComponent {
  @Input() data = {
    btnText: '登录',
    onClickBtn: ()=>{}
  };

  controlData = {
    btnStart: null
  };

  ngOnInit(){
    this.initControls();
  }

  initControls(){
    this.controlData.btnStart = {
      type: 'primary',
      text: '去登录',
      onClick: this.data.onClickBtn
    };
  }
}
