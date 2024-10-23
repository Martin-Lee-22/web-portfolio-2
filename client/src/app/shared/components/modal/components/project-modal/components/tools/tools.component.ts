import { Component, Input } from '@angular/core';
import { tools } from '../../../../../../../data/tools';
import { upwardsRevealStagger } from '../../../../../../../animations';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css', '../../../../../../../animations.css'],
  animations: [upwardsRevealStagger]
})
export class ToolsComponent {
  @Input() projectTools: string[] = []
  toolsList = tools
  isHovering: boolean = false
  hoverIndex: number = 0

  toggleHover(index: number) {
    this.isHovering = !this.isHovering
    this.hoverIndex = index
  }
}
