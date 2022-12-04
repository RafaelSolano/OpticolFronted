import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { BloqueHeroComponentComponent } from './components/bloque-hero-component/bloque-hero-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EncuentranosComponentComponent } from './components/encuentranos-component/encuentranos-component.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    BloqueHeroComponentComponent,
    FooterComponentComponent,
    ServicesComponentComponent,
    InicioComponent,
    EncuentranosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
