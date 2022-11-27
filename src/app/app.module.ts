import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { BloqueHeroComponentComponent } from './components/bloque-hero-component/bloque-hero-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    BloqueHeroComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
