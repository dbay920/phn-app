import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { View } from "ui/core/view";
import { Image } from "ui/image";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";
//import { CensusService } from "../shared/census/census.service";
import * as LabelModule from "tns-core-modules/ui/label";
import { Config } from '../shared/config';
import * as _ from "lodash";
import * as TNSPhone from 'nativescript-phone';


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css", './detail-common.css']
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
        //      private censusService: CensusService,
        private _ngZone: NgZone,
    ) { }

    myDist(x, y) {
        return distance(x, y);
    }

    public callHome() {
        TNSPhone.dial('415-123-4567', false);
    }

    ngOnInit(): void {
        this.route.params
            .forEach((params) => {
                this.locationId = params["id"];
            });

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }

        this.locationsService.getLocationDetails(this.locationId).then((z) => {
            this.details = z;
            this.cards = [
                {
                    name: 'About',
                    data: this.details.getAbout(),
                    icon: 'res://icon_about_location',
                    visible: false
                },
                {
                    name: 'Hours',
                    data: this.details.getHours(),
                    icon: 'res://icon_hours_location',
                    visible: false
                },
                {
                    name: 'Contact',
                    data: this.details.getContact(),
                    icon: 'res://icon_phone_location',
                    visible: false
                },
            ]
            this.image = this.details.getImage();
            this.address = this.details.getAddress().replace(', ', '\n');
            this.name = this.details.getName();

            let feature =
                _.find(Config.healthCenters.features, [
                    'properties.title',
                    this.name
                ]);
            let x = {
                latitude: feature['geometry'].coordinates[1],
                longitude: feature['geometry'].coordinates[0],
            };

            getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then((loc) => {
                if (loc) {
                    let metersToMiles = 0.000621371;

                    this.distance = (this.myDist(x, loc)
                        * metersToMiles).toFixed(1) + ' mi';
                }
                this._ngZone.run(() => {
                    // weird fix for arriving from webview
                })
            }, function(e) {
                console.log("Error: " + e.message);
            });
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
