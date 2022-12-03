import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { CitasComponent } from './pages/citas/citas.component';
import { LayoutComponent } from './components/layout/layout.component';

import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PacienteformComponent } from './components/pacienteform/pacienteform.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    PacientesComponent,
    CitasComponent,
    LayoutComponent,
    PacienteformComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,

    NgbTooltipModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
