import { QueryList, Component, ViewChildren, AfterViewInit, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from "ui/web-view"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./term.component.html",
})

export class SearchTermComponent implements AfterViewInit, OnInit {
    public webViewSrc;
    public searchTerm;
    public static tabView;
    @ViewChildren('ref') ref: QueryList<any>;

    isLocation(href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
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
            if (this.isLocation(event.url)) {

                // Stop the loading event
                if (!android) {
                    event.object.ios.stopLoading();
                } else {
                    event.object.android.stopLoading();
                }

                // Do something depending on the coordinates in the URL
                this._router.navigateByUrl("items/locations/detail/" +
                    event.url.split('=')[1]);
            }
        });
    }

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) { }
}
