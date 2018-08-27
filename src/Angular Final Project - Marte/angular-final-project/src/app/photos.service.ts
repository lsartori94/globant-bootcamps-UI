import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {
    url: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
    rover: Array<string> = ['Curiosity', 'Opportunity', 'Spirit']
    sol: number = 1000;
    page: number = 1;
    camera: string ='';
    apiKey= 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';

    constructor (private http: Http){}

    getCuriosity () {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+ this.rover[0] +'/photos?sol=1000'+'&page='+ this.page+'&api_key='+ this.apiKey)
        .pipe(map (
            (response: Response) => {
                const photos = response.json();
                return photos;
            }
        ))
    }

    getOpportunity () {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+ this.rover[1] +'/photos?sol=1000'+'&page='+ this.page+'&api_key='+ this.apiKey)
        .pipe(map (
            (response: Response) => {
                const data = response.json();
                return data;
            }
        ))
    }


    getSpirit () {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+ this.rover[2] +'/photos?sol=1000'+'&page='+ this.page+'&api_key='+ this.apiKey)
        .pipe(map (
            (response: Response) => {
                const photos = response.json();
                return photos;
            }
        ))
    }


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


