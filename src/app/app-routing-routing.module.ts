import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebutComponent } from './InterfaceHome/debut.component';


const routes: Routes = [{path : 'Home', component:DebutComponent},
                        {path : '', redirectTo : 'Home', pathMatch :'full'},
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
