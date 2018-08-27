import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  onGetOpportunity(){
    this.photosService.getOpportunity()
    .subscribe(
      (photos: any[]) => {
        console.log(photos);
        

      },
      (error) => console.log (error)

    );
  }
  ngOnInit() {
  }

}
