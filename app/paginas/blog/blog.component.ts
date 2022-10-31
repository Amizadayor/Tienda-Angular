import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/interfaces/entrada';
import { EntradasService } from 'src/app/servicios/entradas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  entradas: Entrada[]=[];
  constructor(private entradaService: EntradasService) {
    this.entradaService.getEntradas().subscribe(
      (data: Entrada[]) => {
        this.entradas = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
