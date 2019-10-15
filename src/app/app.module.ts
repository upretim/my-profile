import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePicComponent,
    AboutComponent,
    ServicesComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
