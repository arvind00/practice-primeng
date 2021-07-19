import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxPocComponent } from './checkbox-poc/checkbox-poc.component';
import { TablePocComponent } from './table-poc/table-poc.component';

const routes: Routes = [
  { path: '', component: TablePocComponent, pathMatch: 'full' },
  { path: '', component: CheckboxPocComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
