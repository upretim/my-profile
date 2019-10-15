import { Component } from '@angular/core';
import {ProfilePicComponent} from './profile-pic/profile-pic.component';
import {AboutComponent} from './about/about.component';
import {ContactMeComponent} from './contact-me/contact-me.component';
import {ServicesComponent} from './services/services.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-profile';
}
