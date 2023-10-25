import { TestBed } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { inject } from "@angular/core/testing";
import { ServiceSerie } from "./ServiceSerie";

describe('Service: Serie', () => {
    beforeEach(()=> {
        TestBed.configureTestingModule({
            providers: [ServiceSerie]
        });
    });

    it('should ...', inject([ServiceSerie], (service: ServiceSerie)=>{expect(service).toBeTruthy();}));
});