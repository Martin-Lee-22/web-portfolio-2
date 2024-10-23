import { Component } from '@angular/core';
import { pageTransition } from '../../../animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../animations.css'],
  animations: [pageTransition]
})
export class HomeComponent {

}
