import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-to', component: HowToComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
