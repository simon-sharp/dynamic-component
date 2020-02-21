import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubmoduleStartpageComponent} from './pages/submodule-startpage/submodule-startpage.component';

const routes: Routes = [
    {
        path: '',
        component: SubmoduleStartpageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmoduleRoutingModule { }
