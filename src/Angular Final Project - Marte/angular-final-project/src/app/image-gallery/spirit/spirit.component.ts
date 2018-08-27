import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent implements OnInit {
  public photosArray = [];
  

  constructor(private photosService: PhotosService) { }

  onGetSpirit(){
    
    this.photosService.getSpirit()
    .subscribe(
      (data) => {
        
        console.log(data.photos[0].sol);
      

      },
      (error) => console.log (error)

    );
  }

  ngOnInit() {
  }



}
