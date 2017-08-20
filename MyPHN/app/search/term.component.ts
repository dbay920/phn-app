import { QueryList, Component, ViewChildren, AfterViewInit, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from "ui/web-view"
import { isAndroid, isIOS, device, screen } from "platform";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./term.component.html",
})

export class SearchTermComponent implements AfterViewInit, OnInit {
    public webViewSrc;
    public searchTerm;
    @ViewChildren('ref') ref: QueryList<any>;

    isLocation(href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    }

    isProvider(href) {
        return href.indexOf('DoctorBio.aspx?id=') >= 0;
    }

    ngOnInit() {
        this.route.params.forEach((params) => {
            this.searchTerm = params["term"];
        });
        this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
            + this.searchTerm;
    }

    ngAfterViewInit() {
        this.ref.first.nativeElement.on(WebView.loadStartedEvent, (event) => {
            if (this.isLocation(event.url) || this.isProvider(event.url)) {

                // Stop the loading event
                if (!isAndroid) {
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

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) { }
}
