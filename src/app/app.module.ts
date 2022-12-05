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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EncuentranosComponentComponent } from './components/encuentranos-component/encuentranos-component.component';
import { ReviewsComponentComponent } from './components/reviews-component/reviews-component.component';
import { AdminModule } from './admin/admin.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    BloqueHeroComponentComponent,
    FooterComponentComponent,
    ServicesComponentComponent,
    InicioComponent,
    EncuentranosComponentComponent,
    ReviewsComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
