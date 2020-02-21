import {Component} from '@angular/core';

import {SsoLoadedComponent} from '../../components/sso-loaded/sso-loaded.component';
import {DynamicComponent} from '../../../../projects/sso-dynamic/src/lib/model/dynamic-component.class';

@Component({
    selector: 'sso-startpage',
    templateUrl: './sso-startpage.component.html',
})
export class SsoStartpageComponent {
    public dynamicComponent: DynamicComponent = new DynamicComponent(
        {
            componentType: SsoLoadedComponent,
        }
    );
}
