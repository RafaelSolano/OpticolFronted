import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { CitasComponent } from './pages/citas/citas.component';
import { LayoutComponent } from './components/layout/layout.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';



import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    PacientesComponent,
    CitasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    FormsModule

  ]
})
export class AdminModule { }
