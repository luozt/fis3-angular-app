import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.pug',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {
  @Input() data = {
    title: '',
    greeting: '',
    greetingColor: '#000'
  };

  currDateStr;

  ngOnInit(){
    this.initData();
  }

  initData(){
    // 初始化日期
    let nowDate = new Date();
    let zerofix = (num)=>{
      if(10>num){
        return '0'+num;
      }else{
        return ''+num;
      }
    };
    this.currDateStr = nowDate.getFullYear()+zerofix(nowDate.getMonth()+1)+zerofix(nowDate.getDate());
  }
}
