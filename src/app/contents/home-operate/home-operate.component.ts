import { Component, Input } from '@angular/core';

/**
 * home-operate这个命名
 * 它实际上等于home-operate
 */
@Component({
  selector: 'home-operate',
  templateUrl: './home-operate.component.pug',
  styleUrls: ['./home-operate.component.less']
})
export class HomeOperateComponent {
  @Input() data = {
    btnText: '登录',
    onClickStart: ()=>{},
    onClickOpen: ()=>{},
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
      onClick: this.data.onClickStart
    };
    this.controlData.btnOpen = {
      type: 'default',
      text: '打开详情',
      onClick: this.data.onClickOpen
    };
  }
}
