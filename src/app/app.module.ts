import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PalabraComponent } from './palabra/palabra.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { SvgChangeComponent } from './svg-change/svg-change.component';


@NgModule({
  declarations: [
    AppComponent,
    PalabraComponent,
    SvgChangeComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, AppRoutingModule, MatIconModule, MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
