import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmoduleStartpageComponent} from './pages/submodule-startpage/submodule-startpage.component';
import {SubmoduleRoutingModule} from './submodule-routing.module';

@NgModule({
    declarations: [
        SubmoduleStartpageComponent
    ],
    imports: [
        CommonModule,
        SubmoduleRoutingModule
    ],
    providers: []
})
export class SubmoduleModule { }
