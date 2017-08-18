import { QueryList, Component, OnInit, ElementRef, ViewChildren, AfterViewInit } from "@angular/core";
//import { ServicesService } from "../shared/services/services.service";
import { ActivatedRoute, Router } from '@angular/router';
//import { ServiceDetail } from '../shared/services/detail'
import { WebView } from "ui/web-view"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})

export class ServiceDetailComponent implements OnInit, AfterViewInit {
    public id: string;
    //detail: ServiceDetail
    public webViewSrc: string;
    @ViewChildren('ref') ref: QueryList<any>;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        //private servicesService: ServicesService
    ) { }

    isLocation(href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    }

    isProvider(href) {
        return href.indexOf('DoctorBio.aspx?id=') >= 0;
    }

    ngAfterViewInit() {
        this.ref.first.nativeElement.on(WebView.loadStartedEvent, (event) => {
            if (this.isLocation(event.url) || this.isProvider(event.url)) {

                // Stop the loading event
                if (!android) {
                    event.object.ios.stopLoading();
                } else {
                    event.object.android.stopLoading();
                }

                // Do something depending on the coordinates in the URL
                if (this.isLocation(event.url)) {
                    this._router.navigateByUrl("items/locations/detail/" +
                        event.url.split('=')[1]);
                } else {
                    // is provider
                    this._router.navigateByUrl("items/providers/" +
                        event.url.split('=')[1]);
                }
            }
        });
    }

    /*listViewItemTap(i): void {
        this.goToLocations(i);
    }*/

    /*goToLocations(i): void {
        this._router.navigateByUrl("items/locations/detail/" + this.locations[i].getId());
    }*/

    ngOnInit(): void {
        this.route.params.forEach((params) => {
            this.id = params["id"];
        });

        this.webViewSrc = 'https://primary-health.net/ServiceDetail.aspx?id=' + this.id;

        /*        this.servicesService.getDetails(this.id).then((x) => {
                    this.detail = x;
                },
                    (error) => alert("Could not load locations.")
                );*/
    }
}
