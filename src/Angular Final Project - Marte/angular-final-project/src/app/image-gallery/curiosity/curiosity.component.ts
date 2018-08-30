import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent implements OnInit {
  photosCopy: any[] ;
  curiosityCameras: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'] ;
  cameraFullName: string= 'Mast Camera'; //by Default
  actualSol: number =50; //by Default
  imgsFound: boolean =true;

  constructor(private photosService: PhotosService) { }

  onGetCuriosity(){
    
    this.photosService.getPhotos('curiosity')
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
    this.photosService.getPhotos('curiosity');
    this.onGetCuriosity();
  }
  selectSol(sol){
    this.photosService.sol = sol;
    this.actualSol = sol;
    this.photosService.page = 1;
    this.photosService.getPhotos('curiosity');
    this.onGetCuriosity();
  
  }
  nextPage(){
    this.photosService.page = this.photosService.page+1;
    this.photosService.getPhotos('curiosity');
    this.onGetCuriosity();
  
  }
  previousPage(){
    if (this.photosService.page >1) {
    this.photosService.page = this.photosService.page-1;
    this.photosService.getPhotos('curiosity');
    this.onGetCuriosity();
  }
  
  }
  
  ngOnInit() {
    this.photosService.sol = 80;
    this.actualSol = 80;
    this.photosService.selectedCamera = 'MAST';
    this.onGetCuriosity()
  }

  }
  

