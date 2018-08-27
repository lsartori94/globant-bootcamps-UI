import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {
    constructor (private http: Http){}
    getPhotos () {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM')
        .pipe(map (
            (response: Response) => {
                const photos = response.json();
                return photos;
            }
        ))
    }
}


