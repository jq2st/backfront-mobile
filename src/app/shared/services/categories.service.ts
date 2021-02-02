
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Message } from '../interfaces';

@Injectable({
    providedIn: 'root'
})

export class CategoriesService {

    basea = 'https://salty-cove-68792.herokuapp.com'

    constructor(private http: HttpClient) { }

    fetch(): Observable<Category[]> {
        return this.http.get<Category[]>(this.basea + '/api/category')
    }

    getById(id: string): Observable<Category> {
        return this.http.get<Category>(this.basea + `/api/category/${id}`)
    }

    create(name: string, image?: File): Observable<Category> {
        const fd = new FormData()

        if (image) {
            fd.append('image', image, image.name)
        }
        fd.append('name', name)

        return this.http.post<Category>(this.basea + '/api/category', fd)


    }

    update(id: string, name: string, image?: File): Observable<Category> {
        const fd = new FormData()

        if (image) {
            fd.append('image', image, image.name)
        }
        fd.append('name', name)

        return this.http.patch<Category>(this.basea + `/api/category/${id}`, fd)

    }

    delete(id: string): Observable<Message> {
        return this.http.delete<Message>(this.basea + `/api/category/${id}`)
    }
}