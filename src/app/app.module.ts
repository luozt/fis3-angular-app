import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { ContentsModule } from './contents';
import { PagesModule } from './pages';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ContentsModule,
    PagesModule,
  ],
  providers: [
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit() {
    console.log('hmrOnInit trigger!');
  }

  public hmrOnDestroy() {
    console.log('hmrOnDestroy trigger!');
  }

  public hmrAfterDestroy() {
    console.log('hmrAfterDestroy trigger!');
  }

}
