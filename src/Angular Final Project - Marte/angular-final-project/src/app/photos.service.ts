import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {
    rover: Array<string> = ['Curiosity', 'Opportunity', 'Spirit']
    sol: number;
    page: number = 1;
    selectedCamera: string;
    selectedPhoto: {};
    imgDay: {};
    apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
    gotImageofDay: boolean = false;

    constructor(private http: Http) { }

    getPhotos(rover) {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + this.sol + '&camera=' + this.selectedCamera + '&page=' + this.page + '&api_key=' + this.apiKey)
            .pipe(map(
                (response: Response) => {
                    const photos = response.json();
                    return photos;
                }
            ))
    }
    getRandomPhoto() {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.rover[Math.floor(Math.random() * 3)] + '/photos?sol=' + Math.floor(Math.random() * 1001) + '&api_key=' + this.apiKey)
            .pipe(map(
                (response: Response) => {
                    const photos = response.json();
                    return photos;
                }
            ))
    }
    selectPhoto(photo: {}) {
        this.selectedPhoto = photo;

    }
    selectPhotoDay(photo: {}) {
        this.imgDay = photo;

    }
}



