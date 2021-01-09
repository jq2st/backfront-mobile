import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../interfaces';


@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    basea = 'https://salty-cove-68792.herokuapp.com'

    constructor(private http: HttpClient) { }

    create(order: Order): Observable<Order> {
        return this.http.post<Order>(this.basea + '/api/order', order)
    }

    fetch(params: any = {}): Observable<Order[]> {
        return this.http.get<Order[]>(this.basea + '/api/order', {
            params:new HttpParams({
                fromObject:params
            })
        })
    }
}