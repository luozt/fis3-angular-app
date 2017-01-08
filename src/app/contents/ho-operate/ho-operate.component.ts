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
}
