import { Component } from '@angular/core';
import { MuteComponent } from './core/mute/mute.component';
import { IntroComponent } from './features/components/intro/intro.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AboutComponent } from "./features/components/about/about.component";
import { HomeComponent } from './features/components/home/home.component';
import { ProjectsComponent } from './features/components/projects/projects.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ContactComponent } from "./features/components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MuteComponent, IntroComponent, SidebarComponent, HomeComponent, AboutComponent, ProjectsComponent, ModalComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isIntroActive: boolean = true
  pageIndex: number = 3
}
