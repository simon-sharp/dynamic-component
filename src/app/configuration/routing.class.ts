import {Routes} from '@angular/router';
import {SsoStartpageComponent} from '../pages/sso-startpage/sso-startpage.component';

export class Routing {
    public static getRoutes(): Routes {
        return [
            {
                path: '',
                component: SsoStartpageComponent
            },
        ];
    }
}
