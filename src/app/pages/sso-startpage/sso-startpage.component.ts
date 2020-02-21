import {Component, OnInit} from '@angular/core';

import {SsoLoadedComponent} from '../../components/sso-loaded/sso-loaded.component';
import {DynamicComponent} from '../../../../projects/sso-dynamic/src/lib/model/dynamic-component.class';
import {SubmoduleModule} from '../../modules/submodule/submodule.module';
import {SubmoduleStartpageComponent} from '../../modules/submodule/pages/submodule-startpage/submodule-startpage.component';

@Component({
    selector: 'sso-startpage',
    templateUrl: './sso-startpage.component.html',
})
export class SsoStartpageComponent implements OnInit {
    public dynamicComponent: DynamicComponent;
    public dynamicComponentFromSubmodule: DynamicComponent;

    public ngOnInit(): void {
        this.dynamicComponent = new DynamicComponent(
            {
                componentType: SsoLoadedComponent,
            }
        );

        this.dynamicComponentFromSubmodule = new DynamicComponent(
            {
                moduleType: SubmoduleModule,
                componentType: SubmoduleStartpageComponent,
            }
        );
    }
}
