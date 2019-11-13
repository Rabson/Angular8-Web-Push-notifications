import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotificationsModule } from 'ng-push'; //import the module

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PushNotificationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
