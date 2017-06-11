import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})

export class LocationDetailComponent implements OnInit {

    public cards: Array<any>;
    county: County;

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
        this.route.params
            .forEach((params) => {
                this.county = County.buildFromName(params["id"]);
            });
        this.cards = [
            { name: 'About' },
            { name: 'Hours' },
            { name: 'Contact' },
            { name: 'Providers' }
        ]
    }



    ngOnInit(): void {
        /*        this.locationsService.getCountyLocations(this.county.getHref()).then((x) => {
                    this.locations = x;
                },
                    (error) => alert("Could not load locations.")
                );
        */

    }
}
