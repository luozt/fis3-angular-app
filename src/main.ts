import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app/app.component';

if('pr' === window.NODE_ENV){
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);
