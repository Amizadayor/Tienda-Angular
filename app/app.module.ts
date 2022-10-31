import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './paginas/header/header.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http'
import { ModuloModule } from './modulo/modulo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    TiendaComponent,
    BlogComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
