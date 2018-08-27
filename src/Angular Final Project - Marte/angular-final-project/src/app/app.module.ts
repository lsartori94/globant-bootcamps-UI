import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageOfDayComponent } from './image-of-day/image-of-day.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { PhotosService } from './photos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageGalleryComponent,
    ImageOfDayComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
