import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000/';

@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        /* chave-valor de params está omitida, pois tanto a chave quanto o valor são iguais */
        return this.http
            .get<Photo[]>(API + userName + '/photos', { params });
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false')
        formData.append('imageFile', file, 'file.jpg');
        return this.http.post(
            API + 'photos/upload', formData
        );
    }
}
