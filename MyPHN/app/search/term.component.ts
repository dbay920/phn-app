import { QueryList, Component, ViewChildren, AfterViewInit, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from "tns-core-modules/ui/web-view"
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { ItemsComponent } from '../items.component';

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

                    // is location
                    this._router.navigateByUrl(
                        "items/(locations:locations/detail/" +
                        event.url.split('=')[1] + ')');
                    ItemsComponent.setSelectedIndex(4);
                } else {

                    // is provider
                    this._router.navigateByUrl(
                        "items/(providers:providers/" +
                        event.url.split('=')[1] + ')');
                    ItemsComponent.setSelectedIndex(6);
                }
            }
        });
    }

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) { }
}
