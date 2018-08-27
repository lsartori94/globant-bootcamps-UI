import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrls: ['./image-of-day.component.css']
})
export class ImageOfDayComponent implements OnInit {
  sol: number = 1000;
  camera: string ='';
  page: number = 1;
  api_key: string ='aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';

  constructor(private photosService: PhotosService) { }

  onGet(){
    this.photosService.getPhotos()
    .subscribe(
      (photos: any[]) => {
        console.log(photos);

      },
      (error) => console.log (error)

    );
  }
  ngOnInit()  {
   
  }

}
