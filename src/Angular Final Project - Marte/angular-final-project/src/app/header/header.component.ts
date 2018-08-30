import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  photosCopy: any[];
  imgsFound: boolean = false;

  constructor(private photosService: PhotosService) { }

  onGetImgOfDay() {
    if (this.photosService.gotImageofDay == false) {
      this.photosService.getRandomPhoto()
        .subscribe(
          (data) => {

            this.photosCopy = data.photos;
            try {
              this.imgsFound = true;
              var arrayLenght = this.photosCopy.length;
              this.photosService.selectPhotoDay(this.photosCopy[Math.floor(Math.random() * arrayLenght - 1)])
              this.photosService.gotImageofDay = true;
            }
            catch (err) {
              this.imgsFound = false;
            }
          },
          (error) => console.log(error)

        );
    }
  }


  ngOnInit() {
  }
}
