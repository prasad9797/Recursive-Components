import { Component, OnInit } from '@angular/core';
import { Menu } from './interfaces/menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly menuList: Menu[];
  constructor(private menuService: MenuService) {
    this.menuList = menuService.menuList;
  }

  ngOnInit() {}
}
