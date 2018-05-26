import { NgModule } from '@angular/core';
import { Error } from './component';
import {SharedModule} from './../../app/shared.module';


@NgModule({
  declarations: [Error],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: []
})
export class ErrorModule {}
