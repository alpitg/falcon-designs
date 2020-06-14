import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { FButtonDirective } from './directives/button/f-button.directive';



@NgModule({
  declarations: [
    SpinnerOverlayComponent,
    SpinnerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,

    // Directives
    FButtonDirective
  ]
})
export class SharedModule { }
