import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { BloqueHeroComponentComponent } from './components/bloque-hero-component/bloque-hero-component.component';

import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    BloqueHeroComponentComponent,
    FooterComponentComponent,
    ServicesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
