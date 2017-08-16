import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { CensusService } from "../shared/census/census.service"
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from "color";
import { LocationDetail } from "../shared/location/detail"
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";
import { Config } from '../shared/config';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {
    countyLats;
    image: string;
    details: LocationDetail;
    distance;
    name;
    cards;
    address;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
        private censusService: CensusService
    ) {
    }

    myDist(x, y) {
        return distance(x, y);
    }

    goToLocations(): void {
        this._router.navigateByUrl("items/locations");
    }

    goToUrl(url: string) {
        this._router.navigateByUrl(url);
    }

    ngOnInit(): void {
        this.cards = [
            {
                name: 'Locations',
                image: '~/images/Icon_Locations.png',
                url: 'items/locations'
            }, {
                name: 'Services',
                image: '~/images/Icon_Services.png',
                url: 'items/services'
            }, {
                name: 'Providers',
                image: '~/images/Icon_Providers.png',
                url: 'items/providers'
            }
        ];

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }
        getCurrentLocation({
            desiredAccuracy: 3, updateDistance: 10, timeout: 30000
        }).then((loc) => {
            if (loc) {
                let metersToMiles = 0.000621371;
                let minDist = 3500;
                let minCounty;
                let countyLats = Config.healthCenters.features;


                countyLats.forEach((feature) => {
                    let location = {
                        latitude: feature.geometry.coordinates[1],
                        longitude: feature.geometry.coordinates[0],
                    };
                    let dist = this.myDist(location, loc) * metersToMiles;

                    if (dist < minDist) {
                        minDist = dist;
                        minCounty = feature;
                    }
                });
                this.name = minCounty.properties.title;
                this.address = minCounty.properties.address.replace(', ', '\n');
                this.distance = minDist.toFixed(1) + ' mi';
                this.image = minCounty.properties.image;
            }
        }, function(e) {
            console.log("Error: " + e.message);
        });
    }

    navigate() {
        let locator = new LocateAddress();

        locator.available().then((avail) => {
            if (!avail) {
                alert("maps not available")
            } else {
                locator.locate({
                    address: this.address.replace('\n', '%2C').replace(/ /g, '+').replace(',', '%2C'),
                }).then(() => {
                    console.log("Maps app launched.");
                }, (error) => {
                    console.log(error);
                });
            }

        });

    }
}
