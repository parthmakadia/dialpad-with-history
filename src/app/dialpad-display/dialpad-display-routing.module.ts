import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialpadDisplayComponent } from './dialpad-display/dialpad-display.component';

const routes: Routes = [
  { path:'', component: DialpadDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialpadDisplayRoutingModule { }
