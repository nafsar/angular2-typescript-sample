import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { JframeService } from './jframe.service';

import { JframesComponent } from './jframes.component';


@Component({
  selector: 'angular-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    JframeService
  ]
})
@RouteConfig([
  {
    path: '/jframes',
    name: 'Jframes',
    component: JframesComponent
  }
])
export class AppComponent {
  title = 'TypeScript Sample';
  
  
}

