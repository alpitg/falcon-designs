import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from '../../shared/shared.module';
import { LandingHeaderComponent } from './pages/landing-header/landing-header.component';
import { LandingBodyComponent } from './pages/landing-body/landing-body.component';
import { LandingFooterComponent } from './pages/landing-footer/landing-footer.component';


@NgModule({
  declarations: [LandingPageComponent, LandingHeaderComponent, LandingBodyComponent, LandingFooterComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
