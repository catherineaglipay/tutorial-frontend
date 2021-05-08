import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const API_URL = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
    constructor(private httpClient: HttpClient) {}

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    /**
     * Author:          Catherine D. Aglipay
     * Description:     This function will handle GET requests.
     * Parameter:       Route (string), Optional parameter (object)
     * Return:          Response from backend
     * Date Created:    May 19, 2020
     */
    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient
            .get(API_URL + path, { params })
            .pipe(catchError(this.formatErrors));    
    }

    /**
     * Author:          Catherine D. Aglipay
     * Description:     This function will handle POST requests.
     * Parameter:       Route (string), Data parameters (object), Optional HTTP headers (object)
     * Return:          Response from backend
     * Date Created:    May 19, 2020
     */
    public post(path: string, body: object = {}): Observable<any> {
        return this.httpClient
            .post(API_URL + path, JSON.stringify(body), this.options)
            .pipe(catchError(this.formatErrors));
    }

    

    /**
     * Author:          Catherine D. Aglipay
     * Description:     This function will handle PUT requests.
     * Parameter:       Route (string), Data parameters (object)
     * Return:          Response from backend
     * Date Created:    May 19, 2020
     */
    public put(path: string, body: object = {}): Observable<any> {
        return this.httpClient.put(API_URL + path, JSON.stringify(body), this.options).pipe(catchError(this.formatErrors));
    }

    /**
     * Author:          Catherine D. Aglipay
     * Description:     This function will handle DELETE requests.
     * Parameter:       Route (string)
     * Return:          Response from backend
     * Date Created:    May 19, 2020
     */
    public delete(path: string): Observable<any> {
        return this.httpClient.delete(API_URL + path).pipe(catchError(this.formatErrors));
    }

    public formatErrors(error: any): Observable<any> {
        return throwError(error.error);
    }
}