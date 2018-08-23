import { Injectable } from '@angular/core';
import { marsRoverKey } from './mars-api-key';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MarsApiPhotosService {

  constructor(private http: Http) {

   }

  getByDateAndCamera(rover: string,
    date: string,
    camera: string,
    date_type: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date_type}=${date}&camera=${camera}&&api_key=${marsRoverKey}`);
  }
}
