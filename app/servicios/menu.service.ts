import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient ) { }  //Inyección de dependencias

  getMenu() {
    return this.http.get<Menu[]>('assets/data/menu.json');
  }
}
