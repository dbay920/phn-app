import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from "color";
import { LocationDetail } from "../shared/location/detail"
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";
import { ItemsComponent } from "../items.component";
import { Config } from '../shared/config';
import { Location } from '../shared/location/location';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    //change templateUrl to component_test to view test page in emulator
    templateUrl: "./home.component.html",
    styleUrls: ['home.css', 'home-common.css'],
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
        //      private censusService: CensusService
    ) {
    }

    myDist(x, y) {
        return distance(x, y);
    }

    goToUrl(url) {
        this._router.navigateByUrl('')
        ItemsComponent.setSelectedIndex(url);
    }

    ngOnInit(): void {
        // Loading image to show while detecting location
        this.image = 'res://icon'; // TODO: change me

        // Cards to show on home screen
        this.cards = [
            {
                name: 'Locations',
                image: 'res://icon_location_home',
                url: 4
            }, {
                name: 'Services',
                image: 'res://icon_service_home',
                url: 5
            }, {
                name: 'Providers',
                image: 'res://icon_provider_home',
                url: 6
            }
        ];

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }

        this.locationsService.getAllLocations().then((countyLats) => {
            getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then((loc) => {
                if (loc) {
                    let metersToMiles = 0.000621371;
                    let minDist = 8000;
                    let minCounty: Location;

                    countyLats.forEach((feature) => {
                        let location = feature.getGeo();
                        let dist = this.myDist(location, loc) * metersToMiles;

                        if (dist < minDist) {
                            minDist = dist;
                            minCounty = feature;
                        }
                    });
                    this.name = minCounty.getName()
                    this.address = minCounty.getAddress().replace(', ', '\n');
                    this.distance = minDist.toFixed(1) + ' mi';
                    this.image = minCounty.getImage();
                }
            }, function(e) {

                // image to show when we cannot determine location
                this.image = 'res://icon_location_home'; // TODO: change me
            });
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
