import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
  photosCopy: any[] ;
  opportunityCameras: string[] = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] ;
  cameraFullName: string; 
  actualSol: number; 
  imgsFound: boolean =true;
  constructor(private photosService: PhotosService) { }
  onGetOpportunity(){
    
    this.photosService.getPhotos('opportunity')
    .subscribe(
      (data) => {
        
        this.photosCopy = data.photos;
        try  {
          this.cameraFullName = this.photosCopy[0].camera.full_name;
          this.imgsFound=true;
        }
        catch(err) {
          this.imgsFound=false;
        }
      },
      (error) => console.log (error)
    );
  }
 
  selectCamera(cam: string){
    this.photosService.selectedCamera = cam;
    this.photosService.page = 1;
    this.photosService.getPhotos('opportunity');
    this.onGetOpportunity();
  }
  selectSol(sol){
    this.photosService.sol = sol;
    this.actualSol = sol;
    this.photosService.page = 1;
    this.photosService.getPhotos('opportunity');
    this.onGetOpportunity();
  
  }
  nextPage(){
    this.photosService.page = this.photosService.page+1;
    this.photosService.getPhotos('opportunity');
    this.onGetOpportunity();
  
  }
  previousPage(){
    if (this.photosService.page >1) {
    this.photosService.page = this.photosService.page-1;
    this.photosService.getPhotos('opportunity');
    this.onGetOpportunity();
  }
  
  }
  
  

  ngOnInit() {
    this.photosService.sol = 20;
    this.actualSol = 20;
    this.photosService.selectedCamera = 'PANCAM';
    this.cameraFullName = 'Panoramic Camera';
    this.onGetOpportunity()
  }

  }
  