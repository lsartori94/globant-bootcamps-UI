import { Component, OnInit } from '@angular/core';
import { Rover, rovers } from '../rover';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rovers = rovers;
  constructor() { }

  ngOnInit() {
  }

}
