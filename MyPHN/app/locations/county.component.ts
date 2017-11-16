import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { Location } from "../shared/location/location"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./county.component.html",
    styleUrls: ["./county.component.css"]
})

export class CountyComponent implements OnInit {

    public locations: Array<Location>;
    county: County;

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
        this.route.params
            .forEach((params) => {
                this.county = County.buildFromName(params["id"]);
            });
    }

    listViewItemTap(i): void {
        this.goToLocations(i);
    }

    goToLocations(i): void {
        this._router.navigateByUrl(
            "items/(locations:locations/detail/" +
            this.locations[i].getId() + ')');
    }

    ngOnInit(): void {
        this.locationsService.getCountyLocations(this.county.getHref()).then((x) => {
            this.locations = x;
        },
            (error) => alert("Could not load locations.")
        );


    }
}
