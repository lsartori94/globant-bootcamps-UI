import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { MarsApiPhotosService } from '../mars-api-photos.service';
import { Observable } from 'rxjs/Observable';
import { Rover, rovers } from '../rover';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css'],
  providers: [ MarsApiPhotosService ]
})

export class RoverComponent implements OnInit {
  @Input() name;
  photos = [];
  dateTypeCorr: string;
  date: string;
  rovers = rovers;
  constructor(private marsRoverPhotos: MarsApiPhotosService) {
  //  this.camera = 'zion';
  }
  controlDate(datetype) {
    if (datetype === 'Mars Date (sol)') {
      datetype = 'sol';
    } else {
      if (datetype === 'Earth Date (dd/mm/yyyy)') {
        datetype = 'earth_date';
      }
    }
    this.dateTypeCorr = datetype;
    console.log(datetype);
  }
  consoleprint(data) {
    console.log(data);
  }

  ngOnInit() {
  }

}
