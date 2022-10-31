import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { EntradasComponent } from './entradas/entradas.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    ProductoComponent,
    EntradasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaComponent,
    ProductoComponent,
    EntradasComponent
  ]
})
export class ModuloModule { }
