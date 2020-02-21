import {NgModule} from '@angular/core';
import {SsoDynamicComponent} from './sso-dynamic.component';
import {SsoDynamicComponentDirective} from './directives/sso-dynamic-component/sso-dynamic-component.directive';
import {SsoDynamicModuleComponentDirective} from './directives/sso-dynamic-module-component/sso-dynamic-module-component.directive';

const COMPONENTS = [
  SsoDynamicComponent,
  SsoDynamicComponentDirective,
  SsoDynamicModuleComponentDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SsoDynamicModule { }
