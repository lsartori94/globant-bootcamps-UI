import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrls: ['./image-of-day.component.css']
})
export class ImageOfDayComponent implements OnInit {
  constructor(private photosService: PhotosService) { }

  ngOnInit()  {
   
  }

}
