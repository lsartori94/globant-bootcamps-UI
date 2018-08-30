import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { RoverComponent } from './rover/rover.component';
import { FormsModule } from '@angular/forms';
import { CamPipePipe } from './cam-pipe.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    ImageDetailComponent,
    RoverComponent,
    CamPipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Un día solar de Marte, o "sol", son 24 horas, 39 minutos, y 35,244 segundos
