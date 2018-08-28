import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { MarsApiPhotosService } from '../mars-api-photos.service';
import { Rover, rovers } from '../rover';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})

export class RoverComponent implements OnInit {
  @Input() name;
  photos = [];
  datetype: string;
  date: string;
  rovers = rovers;
  constructor() {
  //  this.camera = 'zion';
  }
  control(datetype) {
    if (datetype === 'Mars Date (sol)') {
      datetype = 'sol';
    } else {
      if (datetype === 'Earth Date (dd/mm/yyyy)') {
        datetype = 'earth_date';
      }
    }
    this.datetype = datetype;
    console.log(datetype);
  }
  consoleprint(data) {
    console.log(data);
  }
  ngOnInit() {
  }

}
