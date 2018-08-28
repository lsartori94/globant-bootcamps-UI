import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { MarsApiPhotosService } from '../mars-api-photos.service';
import { Rover } from '../rover';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})

export class RoverComponent implements OnInit {
  @Input() name;
  photos = [];
  camera: string;
  date: string;
  datetype: string;
  constructor() {
    this.camera = 'zion';
  }
  control(data) {
    this.camera = data;
    console.log(this.camera);
  }
  ngOnInit() {
  }

}
