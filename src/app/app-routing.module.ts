import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbothomeComponent } from './chatbothome/chatbothome.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ChatbothomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
