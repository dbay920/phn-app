import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ServicesService } from "../shared/services/services.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDetail } from '../shared/services/detail'

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})

export class ProviderDetailComponent implements OnInit {
    id: string;
    detail: ServiceDetail
    webViewSrc;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        //private servicesService: ServicesService
    ) {
        this.route.params
            .forEach((params) => {
                this.id = params["id"];
            });
        console.log(typeof this.id);
        this.webViewSrc = 'https://primary-health.net/ServiceDetail.aspx?id=' + this.id;
    }

    /*listViewItemTap(i): void {
        this.goToLocations(i);
    }*/

    /*goToLocations(i): void {
        this._router.navigateByUrl("items/locations/detail/" + this.locations[i].getId());
    }*/

    ngOnInit(): void {
        /*        this.servicesService.getDetails(this.id).then((x) => {
                    this.detail = x;
                },
                    (error) => alert("Could not load locations.")
                );*/
    }
}
