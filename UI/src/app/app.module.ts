import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserScoresService} from './user-scores.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
