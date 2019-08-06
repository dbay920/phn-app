import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail"
import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
    distance,
} from "nativescript-geolocation";
import { ItemsComponent } from "../items.component";
import { Location } from '../shared/location/location';
import { MapsService } from "~/src/app/maps.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    //change templateUrl to component_test to view test page in emulator
    templateUrl: "./home.component.html",
    styleUrls: ['home.css', 'home-common.css'],
})

export class HomeComponent implements OnInit {
    //    countyLats;

    public image: string;
    public details: LocationDetail;

    // display value for closest location
    public distance: string;
    public name: string;
    public address: string;

    public cards: Array<any>;
    private minCounty: Location;

    constructor(
        //   private _router: Router,
        private locationsService: LocationsService,
        private maps: MapsService,
        //      private censusService: CensusService
    ) {
    }

    public goToUrl(url: number) {
        // this._router.navigateByUrl('/items')
        ItemsComponent.setSelectedIndex(url);
    }

    public ngOnInit(): void {
        // Loading image to show while detecting location
        this.image = 'res://loadingscreen'; // TODO: change me

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

        this.locationsService.getAllLocations()
            .then((countyLats: Location[]) => {
                getCurrentLocation({
                    desiredAccuracy: 3, updateDistance: 10, timeout: 30000
                }).then((loc) => {
                    if (loc) {
                        let metersToMiles = 0.000621371;
                        let minDist = 8000;

                        countyLats.forEach((feature) => {
                            let location = feature.getGeo();
                            let dist =
                                this.myDist(location, loc) * metersToMiles;

                            if (dist < minDist) {
                                minDist = dist;
                                this.minCounty = feature;
                            }
                        });
                        this.name = this.minCounty.getName()
                        this.address =
                            this.minCounty.getAddress().replace(', ', '\n');
                        this.distance = minDist.toFixed(1) + ' mi';
                        this.image = this.minCounty.getImage();
                    }
                }, (_e) => {

                    // image to show when we cannot determine location
                    this.image = 'res://icon_location_home'; // TODO: change me
                });
            });
    }

    public navigate() {
        const geo = this.minCounty.getGeo();

        this.maps.openMapApp(geo.latitude, geo.longitude);
    }

    private myDist(x: any, y: any) {
        return distance(x, y);
    }
}
