import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { DragulaModule }    from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ]
})
export class SharedModule { }
