import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from '../pages/home/component';

import { Error } from '../pages/error/component';

const routes: Routes = [
  {path: '', component: Home},
    { path: '**', component: Error }
    
];
      

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
