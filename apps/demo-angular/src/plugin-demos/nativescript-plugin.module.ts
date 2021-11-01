import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPluginComponent } from './nativescript-plugin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPluginComponent }])],
  declarations: [NativescriptPluginComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptPluginModule {}
