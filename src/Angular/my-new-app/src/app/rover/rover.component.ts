import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';

import { MarsApiPhotosService } from '../mars-api-photos.service';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {
  @Input() name;
  valor = [];
  camera;
  date;
  datetype;
  constructor() {
    this.camera = 'zion';
  }

  ngOnInit() {
  }

}
