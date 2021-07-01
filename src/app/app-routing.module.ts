import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxPocComponent } from './checkbox-poc/checkbox-poc.component';

const routes: Routes = [
  { path: '', component: CheckboxPocComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
