import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})

export class SpiritComponent implements OnInit {
   photosCopy: any[] ;
   spiritCameras: string[] = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] ;
   cameraFullName: string; 
   actualSol: number;
   imgsFound: boolean =true;
   

  

  constructor(private photosService: PhotosService) { }
  
  onGetSpirit(){
    
    this.photosService.getPhotos('spirit')
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
    this.photosService.getPhotos('spirit');
    this.onGetSpirit();
  }
  selectSol(sol){
    this.photosService.sol = sol;
    this.actualSol = sol;
    this.photosService.page = 1;
    this.photosService.getPhotos('spirit');
    this.onGetSpirit();
  
  }
  nextPage(){
    this.photosService.page = this.photosService.page+1;
    this.photosService.getPhotos('spirit');
    this.onGetSpirit();
  
  }
  previousPage(){
    if (this.photosService.page >1) {
    this.photosService.page = this.photosService.page-1;
    this.photosService.getPhotos('spirit');
    this.onGetSpirit();
  }
  
  }
  
  ngOnInit() {
    this.photosService.sol = 50;
    this.actualSol = 50;
    this.photosService.selectedCamera = 'FHAZ';
    this.cameraFullName = 'Front Hazard Avoidance Camera';
    this.onGetSpirit()
  }



}
