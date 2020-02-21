import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SsoStartpageComponent} from './pages/sso-startpage/sso-startpage.component';
import {SsoLoadedComponent} from './components/sso-loaded/sso-loaded.component';
import {SsoDynamicModule} from '../../projects/sso-dynamic/src/lib/sso-dynamic.module';

@NgModule({
  declarations: [
    AppComponent,
    SsoStartpageComponent,
    SsoLoadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SsoDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
