import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminPanelComponent } from './admin-panel.component';

export const AdminPanelRoutes: Routes = [
    {
        path: '', component: AdminPanelComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user', component: UserComponent },
            { path: 'maps', component: MapsComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminPanelRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule { }