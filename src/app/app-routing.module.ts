import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Routing} from './configuration/routing.class';

const routes: Routes = Routing.getRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
