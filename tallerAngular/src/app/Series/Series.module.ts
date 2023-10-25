import { NgModule } from "@angular/core";
import { SeriesComponent } from "./Series.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[SeriesComponent],
    exports:[SeriesComponent]
})

export class SerieModule{}