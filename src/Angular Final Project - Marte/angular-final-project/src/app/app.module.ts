import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { PhotosService } from './photos.service';
import { SpiritComponent } from './image-gallery/spirit/spirit.component';
import { CuriosityComponent } from './image-gallery/curiosity/curiosity.component';
import { OpportunityComponent } from './image-gallery/opportunity/opportunity.component';
import { ImageOfDayComponent } from './image-of-day/image-of-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageGalleryComponent,
    ImageDetailComponent,
    SpiritComponent,
    CuriosityComponent,
    OpportunityComponent,
    ImageOfDayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

