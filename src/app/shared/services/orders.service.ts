import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Order } from '../interfaces';


@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    basea = 'https://salty-cove-68792.herokuapp.com'

    constructor(private http: HttpClient) { }

    create(order: any): Observable<any> {
        return this.http.post<any>(this.basea + '/api/order', order)
    }

    fetch(params: any = {}): Observable<any[]> {
        return this.http.get<any[]>(this.basea + '/api/order', {
            params:new HttpParams({
                fromObject:params
            })
        })
    }
}