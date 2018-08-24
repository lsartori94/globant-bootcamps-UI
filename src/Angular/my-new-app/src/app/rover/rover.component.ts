import { Component, OnInit } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {
  valor = [];
  constructor() { }

  ngOnInit() {
  }

}
