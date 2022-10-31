import { Producto } from './../../interfaces/producto';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos : Producto[] = [];
  constructor( private productosService: ProductosService ) {
    this.productosService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
