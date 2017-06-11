import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail";
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
    public details: LocationDetail;
    public address: string;

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
        this.route.params
            .forEach((params) => {
                //                this.county = County.buildFromName(params["id"]);

            });

    }



    ngOnInit(): void {
        this.locationsService.getLocationDetails(72).then((x) => {
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
            this.address = this.details.getAddress().replace(',', '\n');
            console.log(this.address);
        },
            (error) => alert("Could not load location details.")
        );
    }
}
