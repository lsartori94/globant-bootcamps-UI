import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
 // { path: 'home', component: HomeComponent },
 // { path: 'detail/:id', component: ImageDetailComponent }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
