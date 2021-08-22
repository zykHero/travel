import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootprintMainPageComponent } from './footprint-main-page/footprint-main-page.component';

const routes: Routes = [
  { path: '', component: FootprintMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootprintRoutingModule { }
