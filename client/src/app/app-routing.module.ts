import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './Pages/create-article/create-article.component';
import { HomeComponent } from './Pages/home/home.component';
import { WizComponent } from './components/wiz/wiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/new-article', component: CreateArticleComponent },
  { path: 'admin/edit-article', component: WizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
