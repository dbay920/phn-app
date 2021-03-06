import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { Image } from "tns-core-modules/ui/image";
import { LocationsService } from "../shared/location/locations.service";
import { LocationDetail } from "../shared/location/detail";
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoute } from "nativescript-angular/router";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
// import { LocateAddress } from "nativescript-locate-address";
import * as LabelModule from "tns-core-modules/ui/label";
import { Config } from '../shared/config';
import * as _ from "lodash";
import * as TNSPhone from 'nativescript-phone';
import { MapsService } from "~/src/app/maps.service";

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
        private _ngZone: NgZone,
        private maps: MapsService,
    ) { }

    back(): void {
        this._router.navigateByUrl('/items');
    }

    myDist(x, y) {
        return distance(x, y);
    }

    public callHome() {
        TNSPhone.dial(this.details.getContact(), true);
    }

    providersVisible;
    providers;

    gotoProvider(i) {
        this._router.navigateByUrl("items/(providers:providers/" + this.details.getProviders()[i].getId());
    }

    providersTap() {
        if (this.providersVisible === 'collapse')
            this.providersVisible = 'visible';
        else
            this.providersVisible = 'collapse';
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
                }
            ]
            this.providers = []
            this.details.getProviders().forEach((x) => {
                this.providers.push({
                    name: x.getName(), //'Providers',
                    data: x.getServiceName(),
                    icon: 'res://icon_providers_location',
                    image: x.getImage(),
                    visible: false
                });
            })
            this.providersTap();
            this.image = this.details.getImage();
            this.address = this.details.getAddress().replace(', ', '\n');
            this.name = this.details.getName();

            let x = this.details.getGeo();

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

    public listViewItemTap(i) {
        this.cards[i].visible = !this.cards[i].visible;
    }

    public navigate() {
        this.maps.openMapApp(this.details);
    }
}
