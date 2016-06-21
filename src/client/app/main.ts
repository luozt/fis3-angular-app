// import { APP_BASE_HREF } from '@angular/common';
// import { disableDeprecatedForms, provideForms } from '@angular/forms/index';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

// import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

if('pr' === window.NODE_ENV){
  enableProdMode();
}

bootstrap(AppComponent, [
  // disableDeprecatedForms(),
  // provideForms(),
  // APP_ROUTER_PROVIDERS,
  // {
  //   provide: APP_BASE_HREF,
  //   useValue: '/'
  // }
]);
