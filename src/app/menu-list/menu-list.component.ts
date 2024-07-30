import { Component, Input } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent {
  @Input() Item!: Menu;
  expanded: boolean = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
