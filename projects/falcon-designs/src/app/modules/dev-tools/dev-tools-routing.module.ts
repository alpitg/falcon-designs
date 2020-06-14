import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevToolsComponent } from './page/dev-tools/dev-tools.component';


const routes: Routes = [
  {
    path: '',
    component: DevToolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevToolsRoutingModule { }
