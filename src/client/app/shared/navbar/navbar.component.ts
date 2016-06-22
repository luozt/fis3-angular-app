import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: __uri('navbar.component.html'),
  styleUrls: [__uri('navbar.component.css')],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
