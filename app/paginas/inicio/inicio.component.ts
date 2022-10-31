import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriasService) {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
