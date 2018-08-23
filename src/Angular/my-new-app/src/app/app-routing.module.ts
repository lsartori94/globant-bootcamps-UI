import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageDetailComponent } from './image-detail/image-detail.component';
import { RoverComponent } from './rover/rover.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RoverComponent },
  { path: 'img-detail/:id', component: ImageDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
