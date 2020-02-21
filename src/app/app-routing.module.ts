import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SsoStartpageComponent} from './pages/sso-startpage/sso-startpage.component';


const routes: Routes = [
  {
    path: '',
    component: SsoStartpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
