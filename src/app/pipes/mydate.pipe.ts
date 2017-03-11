import { Pipe, PipeTransform, Injectable } from "@angular/core";

/**
转换一些ng2內建但不适用的date如：
'20101101'转：2010年11月01日
*/
@Pipe({name: "mydate"})
@Injectable()
export class MyDatePipe implements PipeTransform{
  /**
  转换方法
  @oriFormat:源格式
  @distFormat:目标类型：zh,-,/
  */
  transform(value, oriFormat, distType, extras){
    let result;
    let strValue = String(value);

    switch(oriFormat){
      case 'yyyyMMdd':
        if(8 === strValue.length){
          if('30001231' !== strValue){
            let year = strValue.slice(0,4);
            let month = strValue.slice(4,6);
            let date = strValue.slice(6,8);
            if('zh' === distType){
              result = year+'年'+month+'月'+date+'日';
            }else{
              result = year+distType+month+distType+date;
            }
            if('endLimit' === extras){
              result = '截至' + result;
            }
          }else{
            result = '长期有效';
          }
        }else{
          result = value;
        }
        break;
      case 'yyyy/MM/dd hh:mm':
        if(13 <= strValue.length){
          let year = strValue.slice(0,4);
          let month = strValue.slice(4,6);
          let date = strValue.slice(6,8);
          let hour, minute;

          if(14 === strValue.length){
            hour = strValue.slice(8,10);
            minute = strValue.slice(10,12);
          }else{
            hour = strValue.slice(8,9);
            minute = strValue.slice(9,11);
          }

          result = year+'/'+month+'/'+date+' ' + hour + ':' + minute;
        }else{
          result = value;
        }
        break;
      case 'yyyy-MM-dd hh:mm:ss':
        if(13 <= strValue.length){
          let year = strValue.slice(0,4);
          let month = strValue.slice(4,6);
          let date = strValue.slice(6,8);
          let hour, minute, second;

          if(14 === strValue.length){
            hour = strValue.slice(8,10);
            minute = strValue.slice(10,12);
            second = strValue.slice(12,14);
          }else{
            hour = strValue.slice(8,9);
            minute = strValue.slice(9,11);
            second = strValue.slice(11,13);
          }

          result = year+'-'+month+'-'+date+' ' + hour + ':' + minute + ':' + second;
        }else{
          result = value;
        }
        break;
      case 'hhmmss':
        let hh = strValue.slice(0,2);
        let mm = strValue.slice(2,4);
        let ss = strValue.slice(4,6);
        result = [hh,mm,ss].join(distType||':');
        break;
    }

    return result;
  }
}
