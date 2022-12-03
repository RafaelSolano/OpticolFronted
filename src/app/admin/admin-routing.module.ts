import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'pacientes',
        pathMatch:'full'
      },
      {
        path:'citas',
        component: CitasComponent
      },
      {
        path:'pacientes',
        component: PacientesComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
