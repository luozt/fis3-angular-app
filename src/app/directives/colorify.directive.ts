import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[colorify]"
})

export class ColorifyDirective {
  @Input() colorify; // 接受一个颜色值

  $host; // 当前指令的节点

  constructor(
    private elementRef: ElementRef
    ){}

  ngOnInit(){
    this.initData();
    this.initControls();
  }

  initData(){
    this.$host = this.elementRef.nativeElement;
  }

  initControls(){
    this.$host.style.color = this.colorify;
  }
}


