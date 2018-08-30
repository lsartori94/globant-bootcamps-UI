import { Component, OnInit, Input } from '@angular/core';
import { Rover } from '../rover';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  @Input() localPhotos;

  constructor() {


  }
  control() {

    console.log(JSON.stringify(this.localPhotos.photos[0] ) );
  }
  ngOnInit() {

  }

}
