import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Jframe } from './jframe';

import { JframeService } from './jframe.service';

@Component({
    
  selector: 'my-jsframe',
  templateUrl: 'app/jframes.component.html',
  styleUrls:  ['app/jframes.component.css']
  
})
export class JframesComponent implements OnInit {
  jframes: Jframe[];
  selectedJframe: Jframe;   

  constructor(
    private _router: Router,
    private _jframeService: JframeService) { }

  getJframes() {
    this._jframeService.getJframes().then(jframes => this.jframes = jframes);
  }

  ngOnInit() {
    this.getJframes();
    
  
  }

}
