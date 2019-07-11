import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Config } from '../shared/config';
import * as _ from "lodash";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { Location } from "../shared/location/location";
import { LocateAddress } from "nativescript-locate-address";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./locations.component.html",
    styleUrls: ["./locations.component.css", './locations-common.css']
})

export class LocationsComponent implements OnInit {

    public counties: Array<County>;
    public myItems: Array<SegmentedBarItem>;
    public i;
    visibility1;
    visibility3;
    visibility2;
    selectedIndex;

    constructor(private route: ActivatedRoute, private _router: Router, private locationsService: LocationsService) {
    }

    listViewItemTap(i): void {
        this.goToLocations(i);
    }

    goToLocations(i): void {
        switch (this.selectedIndex) {
            case 0:
                this._router.navigateByUrl('items/(locations:locations/' +
                    this.counties[i].getName() + ')')

                break;
            case 1:
                this._router.navigateByUrl('items/(locations:locations/detail/' +
                    (this.sortedDistance[i].getId()) + ')');
                break;
            case 2:
                this._router.navigateByUrl('items/(locations:locations/detail/' +
                    (this.sortedAlphabetically[i].getId()) + ')');
                break;
            default:
                break;
        }
    }

    onSelectedIndexChange(event) {
        let segmetedBar = <SegmentedBar>event.object;
        this.selectedIndex = segmetedBar.selectedIndex;
        switch (this.selectedIndex) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                break;
            default:
                break;
        }
    }

    sortedAlphabetically;
    sortedDistance;

    myDist(x, y) {
        return distance(x, y);
    }

    ngOnInit(): void {
        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }

        this.locationsService.getAllLocations().then((countyLats) => {
            getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then((loc) => {
                if (loc) {
                    this.sortedDistance = _.sortBy(countyLats, (feature: Location) => {
                        let location = feature.getGeo();
                        let dist = this.myDist(location, loc);
                        let metersToMiles = 0.000621371;

                        // save distance
                        feature.push((dist * metersToMiles).toFixed(1) + ' mi');

                        return dist;
                    });
                    this.sortedAlphabetically =
                        _.sortBy(this.sortedDistance, (location: Location) => {
                            return location.getName();
                        });
                }
            }, function(e) {
                console.log("Error: " + e.message);
            });
        });
        this.i = 0;
        this.myItems = [

        ];
        for (let i = 1; i < 4; i++) {
            const item = new SegmentedBarItem();

            this.myItems.push(item);
        }
        this.myItems[0].title = 'County';
        this.myItems[1].title = 'Distance';
        this.myItems[2].title = 'Alphabetical';


        this.locationsService.getCounties().then((x) => {
            this.counties = x;
        },
            (error) => alert("Could not load location info." + error)
        );
    }
}
