import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SsoDynamicModule} from '../../projects/sso-dynamic/src/lib/sso-dynamic.module';
import {SsoStartpageComponent} from './pages/sso-startpage/sso-startpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SsoStartpageComponent,
  ],
  imports: [
    SsoDynamicModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
