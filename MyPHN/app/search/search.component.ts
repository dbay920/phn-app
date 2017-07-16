import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { CensusService } from "../shared/census/census.service"
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from "color";
import { LocationDetail } from "../shared/location/detail"
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";



declare var CGSizeMake: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})


export class SearchComponent implements OnInit {

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
    ) {

    }

    webViewSrc;
    searchTerm;

    search() {

        this.webViewSrc = 'https://primary-health.net/Search.aspx?q=' + this.searchTerm;
        console.log(this.webViewSrc)
    }

    ngOnInit(): void {
        this.searchTerm = '';
        this.webViewSrc = '';
    }
}
