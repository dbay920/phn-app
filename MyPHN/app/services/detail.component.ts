import { NgZone, QueryList, Component, OnInit, ElementRef, ViewChildren, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { isAndroid, isIOS, device, screen } from "platform";
import { ItemsComponent } from '../items.component';
import { LocationsService } from '../shared/location/locations.service';
import { Provider } from "../shared/providers/provider"
import * as TNSPhone from 'nativescript-phone';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})

export class ServiceDetailComponent implements OnInit, AfterViewInit {
    public id: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private locationsService: LocationsService,
        private _ngZone: NgZone,
    ) { }

    back(): void {
        this._router.navigateByUrl('/items');
    }

    isLocation(href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    }

    isProvider(href) {
        return href.indexOf('DoctorBio.aspx?id=') >= 0;
    }

    ngAfterViewInit() {

    }

    providersTap() {

    }

    gotoProvider(i) {
        this._router.navigateByUrl("items/(providers:providers/" + this.providers[i].getId());
    }

    public callHome(x) {
        TNSPhone.dial(x.getContact(), true);
    }

    providersVisible;
    providers;
    ngOnInit(): void {
        this.route.params.forEach((params) => {
            this.id = params["id"].split('#')[0];
        });

        this.locationsService.getServiceProviders(this.id).then(
            (y: Array<Provider>) => {
                this.providers = y;
            });
    }
}
