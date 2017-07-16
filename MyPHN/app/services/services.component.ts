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
    templateUrl: "./services.component.html",
})


export class ServicesComponent implements OnInit {
    public tabSelectedIndex: number;
    thing: number
    countyLats;
    image: string;
    details: LocationDetail;
    distance;
    name;
    address;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
    ) {
        this.tabSelectedIndex = 3;


        this.countyLats = {
            counties: ['Ashtabula', 'Beaver', 'Blair', 'Butler', 'Cambria', 'Clarion',
                'Crawford', 'Erie', 'Indiana', 'Jefferson', 'Lawrence', 'Mercer', 'Mifflin', 'Northumberland', 'Schuylkill', 'Trumbull', 'Warren'
            ],
            Ashtabula: {
                latitude: 41.9397,
                longitude: -80.7214
            },
            Beaver: {
                latitude: 40.6368,
                longitude: -80.3659
            },
            Blair: {
                latitude: 40.4531,
                longitude: -78.3842
            },
            Butler: {
                latitude: 40.9115, longitude: -79.8297
            },
            Cambria: { latitude: 40.4894, longitude: -78.7476 },
            Clarion: {
                latitude: 41.1982, longitude: -79.4704
            },
            Crawford: {
                latitude: 41.6661, longitude: -80.2767

            },
            Erie: {
                latitude: 42.0522, longitude: -80.1875
            },
            Indiana: {
                latitude: 40.6851, longitude: -79.1097
            },
            Jefferson: {
                latitude: 41.1470, longitude: -78.9288
            },
            Lawrence: {
                latitude: 40.9579, longitude: -80.3659
            },
            Mercer: {
                latitude: 41.2620, longitude: -80.1875
            },
            Mifflin: {
                latitude: 40.6523, longitude: -77.6078
            },
            Northumberland: {
                latitude: 40.8674, longitude: -76.6875
            },
            Schuylkill: {
                latitude: 40.6873, longitude: -76.1784
            },
            Trumbull: {
                latitude: 41.3065, longitude: -80.7214
            },
            Warren: {
                latitude: 41.8143, longitude: -79.2902
            },
        }
    }

    goToLocations(): void {
        this._router.navigateByUrl("items/locations");
    }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();

        if (!isEnabled()) {
            enableLocationRequest();
            console.log('nonblocking');
        }
        getCurrentLocation({}).then((loc) => {
            if (loc) {
                let metersToMiles = 0.000621371;
                let minDist = 3500;
                let minCounty;


                this.countyLats.counties.forEach((location) => {
                    let dist = distance(this.countyLats[location], loc) * metersToMiles;

                    if (dist < minDist) {
                        minDist = dist;
                        minCounty = location;
                    }
                });
                /*                this.locationsService.getCountyLocations('https://primary-health.net/' + minCounty + '.aspx').then((x) => {
                                    let promiseArray = [];
                                    x.forEach((y) => {
                                        promiseArray.push(this.censusService.getLocation(y.getAddress()));
                                        console.log(y.getImage)
                                    });

                                    Promise.all(promiseArray).then((locationArray) => {
                                        let minDist = 3500;
                                        let minLoc;

                                        locationArray.forEach((z, index) => {
                                            let dist = distance(z, loc) * metersToMiles;

                                            if (dist < minDist) {
                                                minDist = dist;
                                                minLoc = index;
                                            }
                                        });
                                        this.distance = minDist.toFixed(1) + ' mi';
                                        this.locationsService.getLocationDetails(x[minLoc].getId()).then((w) => {
                                            this.details = w;
                                            this.image = w.getImage();
                                            this.address = w.getAddress().replace(',', '\n');
                                            this.name = w.getName();

                                        }, (e) => alert(e));
                                    }, (e) => alert(e));
                                }, (e) => alert(e));
                            }
                        });

                        this.thing = 0;

                        /*        Promise.all(promiseArray).then((x) => {
                                    promiseArray = [];
                                    x.forEach((location, index) => {
                                        let address = location.getAddress();

                                        if (address)
                                            promiseArray.push(this.censusService.getLocation(location.getAddress()))
                                    })
                                },
                                    (error) => alert(error)
                                );
                                Promise.all(promiseArray).then((x) => {
                                    console.log('test')
                                    x.forEach((x) => {
                                        console.log(x.latitude);
                                    })
                                }, (e) => alert(e));

                                let minDist = 2000;
                                let minLocation;*/


                /*        this.locationsService.getCounties().then((x) => {
                            console.log(x[0].getName(), x[0].getHref());
                        },
                            (error) => alert("Unfortunately we could not find your account." + error)
                        );*/
            }
        })
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
