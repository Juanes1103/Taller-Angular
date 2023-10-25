import { Component, OnInit } from "@angular/core";
import {Serie} from './Series'
import { ServiceSerie } from "./ServiceSerie";

@Component({
    selector: 'app-Series',
    templateUrl: './Series.component.html',
    styleUrls: ['./Series.component.css']
})

export class SeriesComponent implements OnInit {
    
    series: Array<Serie>=[]
    total: number=0
    seasons: number=0
    average: number=0

    getSeriesList(){
        this.serieService.getSeries().subscribe(series=>{
            series.forEach(serie=>this.seasons+=serie.seasons);
            this.average=this.seasons/series.length;
        });

        console.log(`Average ${this.average}, Season ${this.seasons} and total ${this.total}`)
    }


    constructor(private serieService: ServiceSerie){}

    ngOnInit(): void {
        this.getSeriesList();
    }

}