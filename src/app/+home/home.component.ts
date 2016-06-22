import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import { NameListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: __uri('home.component.html'),
  styleUrls: [__uri('home.component.css')],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent {
  newName: string;

  constructor(public nameListService: NameListService){}

  addName(): boolean{
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
