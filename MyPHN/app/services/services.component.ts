import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { ServicesService } from "../shared/services/services.service";
import { Service } from "../shared/services/service"
import { CensusService } from "../shared/census/census.service"
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from "color";
import { LocationDetail } from "../shared/location/detail"
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./services.component.html",
})

export class ServicesComponent implements OnInit {
    public tabSelectedIndex: number;
    thing: number

    services: Array<Service>;

    image: string;
    details: LocationDetail;
    distance;
    name;
    address;

    constructor(
        private _router: Router,
        private servicesService: ServicesService,
    ) {
        this.tabSelectedIndex = 3;
    }

    goToLocations(): void {
        this._router.navigateByUrl("items/locations");
    }

    ngOnInit(): void {
        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }
        getCurrentLocation({}).then((loc) => {
            if (loc) {
                let metersToMiles = 0.000621371;
                let minDist = 3500;
                let minCounty;
            }
        })
        this.servicesService.getServices().then((x) => {
            this.services = x;
        });
    }

    navigate() {
        let locator = new LocateAddress();
        locator.locate({
            address: this.details.getAddress(),
        }).then(() => {
            console.log("Maps app launched.");
        }, (error) => {
            console.log(error);
        });
    }
}
