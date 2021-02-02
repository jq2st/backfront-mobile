import { Message,  } from './../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Position} from '../interfaces';


@Injectable({
    providedIn: 'root'
})

export class PositionService {

    basea = 'https://salty-cove-68792.herokuapp.com'

    constructor(private http: HttpClient) { }

    fetch(categoryId: string): Observable<Position[]> {
        return this.http.get<Position[]>(this.basea + `/api/position/${categoryId}`);
    }

    create(position:Position):Observable<Position> {
        return this.http.post<Position>(this.basea + '/api/position', position)
    }

    update(position:Position):Observable<Position> {
        return this.http.patch<Position>(this.basea + `/api/position/${position._id}`, position)
    }
    
    delete(position:Position):Observable<Message>{
        return this.http.delete<Message>(this.basea + `/api/position/${position._id}`)
    }
}