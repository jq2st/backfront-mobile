import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AnalyticsPage, OverviewPage } from '../interfaces';

@Injectable({
    providedIn:'root'
})
export class AnalyticsService{

    basea = 'https://salty-cove-68792.herokuapp.com'

    constructor (private http:HttpClient){}

    getOverview():Observable <any>{
        return this.http.get<any>(this.basea + '/api/analytics/overview')

    }

    getAnalytics():Observable<any>{
        return this.http.get<any>(this.basea + '/api/analytics/analytics')
    }
}