import { Component } from '@angular/core';
import { pageTransition } from '../../../animations';
import { AvatarComponent } from "./components/avatar/avatar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../animations.css'],
  animations: [pageTransition]
})
export class HomeComponent {

}
