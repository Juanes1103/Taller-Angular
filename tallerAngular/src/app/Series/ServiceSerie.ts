import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Serie } from "./Series";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/Environment/environment";

@Injectable({
    providedIn: 'root'
})

export class ServiceSerie {
    private link= environment.baseUrl;

    constructor(private http: HttpClient) {}

    getSeries():Observable<Serie[]>{
        return this.http.get<Serie[]>(this.link);
    }
}