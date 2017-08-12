import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import { County } from "../shared/location/county";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { Config } from '../shared/config';
import * as _ from "lodash";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LocateAddress } from "nativescript-locate-address";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./locations.component.html",
    styleUrls: ["./locations.component.css"]
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
        this._router.navigateByUrl("items/locations/" + this.counties[i].getName());
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
        this.sortedAlphabetically = _.sortBy(Config.healthCenters.features, 'properties.title');

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }
        getCurrentLocation({
            desiredAccuracy: 3, updateDistance: 10, timeout: 30000
        }).then((loc) => {
            if (loc) {
                this.sortedDistance = _.sortBy(Config.healthCenters.features, (feature: any) => {
                    let location = {
                        latitude: feature.geometry.coordinates[1],
                        longitude: feature.geometry.coordinates[0],
                    };
                    let dist = this.myDist(location, loc);

                    return dist;
                });

                console.log(this.sortedDistance[0].properties.title);
            }
        }, function(e) {
            console.log("Error: " + e.message);
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
