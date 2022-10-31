import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: Menu[] = [];
  constructor( private menuService : MenuService) {
    this.menuService.getMenu().subscribe(
      (datos: Menu[]) => {
        this.menu = datos;
      }
    );
  }
}