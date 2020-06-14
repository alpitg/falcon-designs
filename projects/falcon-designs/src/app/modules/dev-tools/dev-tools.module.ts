import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsRoutingModule } from './dev-tools-routing.module';
import { DevToolsComponent } from './page/dev-tools/dev-tools.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DevToolsComponent],
  imports: [
    CommonModule,
    DevToolsRoutingModule,
    SharedModule
  ]
})
export class DevToolsModule { }
