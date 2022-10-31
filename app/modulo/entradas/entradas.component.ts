import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/interfaces/entrada';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
@Input() entradas: Entrada[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
