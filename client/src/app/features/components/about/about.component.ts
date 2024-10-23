import { Component } from '@angular/core';
import { pageTransition } from '../../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../../animations.css'],
  animations:[pageTransition]
})
export class AboutComponent {

}
