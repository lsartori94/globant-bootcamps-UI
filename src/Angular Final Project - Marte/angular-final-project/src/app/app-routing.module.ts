import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpiritComponent } from './image-gallery/spirit/spirit.component';
import { CuriosityComponent } from './image-gallery/curiosity/curiosity.component';
import { OpportunityComponent } from './image-gallery/opportunity/opportunity.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageOfDayComponent } from './image-of-day/image-of-day.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: ImageGalleryComponent
  },
  {
    path: 'spirit',
    component: SpiritComponent
  },
  {
    path: 'curiosity',
    component: CuriosityComponent
  },
  {
    path: 'opportunity',
    component: OpportunityComponent
  },
  {
    path: 'image-of-day',
    component: ImageOfDayComponent
  },
  {
    path: 'detail',
    component: ImageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}