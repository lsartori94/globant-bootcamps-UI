import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { MarsApiPhotosService } from '../mars-api-photos.service';
import { Observable } from 'rxjs/Observable';
import { Rover, rovers } from '../rover';
import { CamPipePipe } from '../cam-pipe.pipe';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css'],
  providers: [ MarsApiPhotosService ]
})

export class RoverComponent implements OnInit {
  @Input() name;
  photos = [];
  date: string;
  rovers = rovers;
  earth_date = 'earth_date';
  sol = 'sol';
  constructor() {
  //  this.camera = 'zion';
  }

  consoleprint(data) {
    console.log(data);
  }
  // getRoverPics(date: string, )

  ngOnInit() {
  }

}
