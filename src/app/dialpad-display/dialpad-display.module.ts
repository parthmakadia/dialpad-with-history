import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialpadDisplayRoutingModule } from './dialpad-display-routing.module';
import { DialpadHistoryComponent } from './dialpad-history/dialpad-history.component';
import { DialpadComponent } from './dialpad/dialpad.component';
import { DialpadDisplayComponent } from './dialpad-display/dialpad-display.component';


@NgModule({
  declarations: [DialpadHistoryComponent, DialpadComponent, DialpadDisplayComponent],
  imports: [
    CommonModule,
    DialpadDisplayRoutingModule
  ]
})
export class DialpadDisplayModule { }
