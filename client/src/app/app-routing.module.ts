import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './Pages/create-article/create-article.component';
import { HomeComponent } from './Pages/home/home.component';
import { WizComponent } from './components/wiz/wiz.component';
import { AdminPanelComponent } from './Pages/admin/admin-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('./Pages/admin/admin-panel.module').then(m => m.AdminPanelModule)},
  { path: 'new-article', component: CreateArticleComponent },
  { path: 'edit-article', component: WizComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
