import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./locations.component.html",
    styleUrls: ["./locations.component.css"]
})

export class LocationsComponent implements OnInit {

    public counties: Array<County>;

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
    }

    listViewItemTap(i): void {
        this.goToLocations(i);
    }

    goToLocations(i): void {
        this._router.navigateByUrl("items/locations/" + this.counties[i].getName());
    }

    ngOnInit(): void {
        this.locationsService.getCounties().then((x) => {
            this.counties = x;
        },
            (error) => alert("Could not load location info." + error)
        );
    }
}