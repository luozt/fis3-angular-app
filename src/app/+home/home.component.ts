import { Component } from '@angular/core';
import { NgForm } from "@angular/common";

import { NameListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
