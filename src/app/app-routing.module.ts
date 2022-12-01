import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent }from './pages/news/service.component'
import { ContatoComponent } from './pages/contato/contato.component'


const routes: Routes = [
    {
      path:'',
      component: HomeComponent
    },
    {
      path:'content/:id',
      component:ContentComponent
    },
    {
      path:'service',
      component: ServiceComponent
    },
    {
      path: 'contato',
      component: ContatoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
