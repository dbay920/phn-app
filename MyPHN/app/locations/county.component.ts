import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { Location } from "../shared/location/location";
import { ServicesComponent } from '../services/services.component';
import * as _ from "lodash";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./county.component.html",
    styleUrls: ["./county.component.css"]
})

export class CountyComponent implements OnInit {

    public locations: Array<Location>;
    county: County;

    constructor(private route: ActivatedRoute,
        private _router: Router,
        private locationsService: LocationsService) {
    }

    listViewItemTap(i): void {
        this.goToLocations(i);
    }

    back(): void {
        this._router.navigateByUrl('/items');
    }

    goToLocations(i): void {
        this._router.navigateByUrl(
            "items/(locations:locations/detail/" +
            this.locations[i].getId() + ')');
    }

    ngOnInit(): void {
        this.route.params
            .forEach((params) => {
                this.county = County.buildFromName(params["id"]);
                ServicesComponent.services.forEach((service) => {
                    if (service.getId() == this.county.getHref())
                        this.county.service = service.getName();
                });
            });

        this.locationsService.getAllLocations().then((x) => {
            const path = this.route.snapshot.url[0].path;

            if (path === 'services') {
                this.locationsService.getServiceLocationsText(this.county.getHref()).then((y) => {
                    this.locations = _.filter(x, (loc: Location) => {
                        return y.indexOf(loc.getName()) >= 0;
                    });
                });
            } else {
                this.locations = _.filter(x, (loc: Location) => {
                    return loc.getCounty().includes(this.county.getName());
                });
            }





        }, (error) => alert("Could not load locations."));
    }
}
