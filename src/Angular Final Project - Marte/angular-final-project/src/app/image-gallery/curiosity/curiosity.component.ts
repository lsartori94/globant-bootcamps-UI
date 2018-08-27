import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }
  onGetCuriosity(){
    this.photosService.getCuriosity()
    .subscribe(
      (photos: any[]) => {
        console.log(photos);
        

      },
      (error) => console.log (error)

    );
  }
}
