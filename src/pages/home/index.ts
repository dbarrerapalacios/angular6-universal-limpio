import { NgModule } from '@angular/core';
import { Home } from './component';
import {SharedModule} from './../../app/shared.module';


@NgModule({
  declarations: [Home],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: []
})
export class HomeModule {}
