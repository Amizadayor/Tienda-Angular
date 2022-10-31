import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';

const routes: Routes = [
  { path:"inicio", component: InicioComponent},
  { path:"nosotros", component: NosotrosComponent},
  { path:"tienda", component: TiendaComponent},
  { path:"blog", component: BlogComponent},
  { path:"galeria", component: GaleriaComponent},
  { path:"contacto", component: ContactoComponent},
  { path:"", redirectTo:"/inicio", pathMatch:"full"},
  { path:"**", component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
