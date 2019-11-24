import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from '../dashboard/dashboard.component'
import { DebutComponent } from '../InterfaceHome/debut.component';

    const routes: Routes = [
        {path: '',component: DashboardComponent},
        {path:'Home',component:DebutComponent}
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    
