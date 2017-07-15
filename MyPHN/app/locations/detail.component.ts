import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { Image } from "ui/image";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";



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

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
        this.route.params
            .forEach((params) => {
                this.locationId = params["id"];
            });

    }



    ngOnInit(): void {
        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }

        let x = getCurrentLocation({});
        x.then((loc) => {
            if (loc) {
                console.log("Current location is: " + loc.latitude + loc.longitude);

            }
        });

        this.locationsService.getLocationDetails(this.locationId).then((x) => {
            //this.locations = x;
            let str = JSON.stringify(x, null, 4)
            console.log(str);
            this.details = x;

            this.cards = [
                { name: 'About', data: this.details.getAbout() },
                { name: 'Hours', data: this.details.getHours() },
                { name: 'Contact', data: this.details.getContact() },
                { name: 'Providers', data: this.details.getProviders() }
            ]
            this.image = this.details.getImage();
            console.log(this.image);
            this.address = this.details.getAddress().replace(',', '\n');
            this.name = this.details.getName();
            //console.log(this.details.getProviders());
        },
            (error) => alert("Could not load location details.")
        );
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
