import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    SidebarComponent,
    DashboardComponent,
    UserComponent,
    MapsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
  ]
})
export class AdminPanelModule { }
