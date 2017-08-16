import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { Image } from "ui/image";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";
import { CensusService } from "../shared/census/census.service";
import * as LabelModule from "tns-core-modules/ui/label";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})

export class LocationDetailComponent implements OnInit {

    public cards: Array<any>;
    public details: LocationDetail;
    public address: string;
    public image: string;
    public name: string;
    public locationId;
    public distance;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private locationsService: LocationsService,
        private censusService: CensusService
    ) { }

    ngOnInit(): void {
        this.route.params
            .forEach((params) => {
                this.locationId = params["id"];
            });

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }

        this.locationsService.getLocationDetails(this.locationId).then((x) => {
            //this.locations = x;
            let str = JSON.stringify(x, null, 4)
            console.log(str);
            this.details = x;

            this.cards = [
                {
                    name: 'About',
                    data: this.details.getAbout(),
                    icon: '~/images/Icon_About.png',
                    visible: false
                },
                {
                    name: 'Hours',
                    data: this.details.getHours(),
                    icon: '~/images/Icon_Hours.png',
                    visible: false
                },
                {
                    name: 'Contact',
                    data: this.details.getContact(),
                    icon: '~/images/Icon_Contact.png',
                    visible: false
                },
                //  { name: 'Providers', data: this.details.getProviders() }
            ]
            this.image = this.details.getImage();
            this.address = this.details.getAddress().replace(',', '\n');
            let result = this.censusService.getLocation(this.details.getAddress());
            result.then((x) => {


                getCurrentLocation({
                    desiredAccuracy: 3, updateDistance: 10, timeout: 30000
                }).then((loc) => {
                    if (loc) {
                        let metersToMiles = 0.000621371;
                        this.distance = (distance(x, loc) * metersToMiles).toFixed(1) + ' mi';
                    }
                }, function(e) {
                    console.log("Error: " + e.message);
                });


            }, function(e) {
                console.log("Error: " + e.message);
            })
            this.name = this.details.getName();
            //console.log(this.details.getProviders());
        },
            (error) => alert("Could not load location details.")
        );
    }

    listViewItemTap(i) {
        this.cards[i].visible = !this.cards[i].visible;
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
