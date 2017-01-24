import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.pug',
  styleUrls: ['./app-button.component.less']
})
export class AppButtonComponent {
  @Input() data = {
    type: 'default',
    text: '按钮',
    onClick: ()=>{}
  };

  ngOnInit(){
    this.initData();
  }

  initData(){
    if(!this.data.onClick){
      this.data.onClick = ()=>{};
    }
  }
}
