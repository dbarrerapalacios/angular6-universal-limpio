import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule, ReactiveFormsModule}         from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//import { HttpModule } from "@angular/http";
import { RouterModule, Routes }  from '@angular/router';
import {RequestsProvider}  from './../providers/requests';
//import {Footer, FooterDos, Header, HeaderDos}  from './components';
//import {PeticionesService, HelpersService} from './services';
const appRoutes: Routes = [];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    CommonModule,
    HttpClientModule,
    RouterModule
],
 // declarations: [Footer,FooterDos,Header, HeaderDos],
  declarations: [],
 // exports: [HttpModule, Footer, FooterDos, Header, HeaderDos,
  exports: [ RouterModule, CommonModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  // providers:[PeticionesService, HelpersService]
  providers:[RequestsProvider]
})
export class SharedModule {
}
