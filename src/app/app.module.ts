import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './shared/material/material.module';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule,

    ReactiveFormsModule,

    MaterialModule
  ],

  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
