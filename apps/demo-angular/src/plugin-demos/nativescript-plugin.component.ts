import { Component, NgZone } from '@angular/core';
import { DemoSharedTealium } from '@demo/shared';
import { } from '@tealium/nativescript-plugin';

@Component({
	selector: 'demo-nativescript-plugin',
	templateUrl: 'nativescript-plugin.component.html',
})
export class NativescriptPluginComponent {
  
  traceId = '';
  demoShared: DemoSharedTealium;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTealium();
  }

}