import { QueryList, Component, ViewChildren, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from "ui/web-view"


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./term.component.html",
})

export class SearchTermComponent implements AfterViewInit {
    webViewSrc;
    searchTerm;

    //@ViewChild(WebView) public wv: WebView;
    public static tabView;
    @ViewChildren('ref') ref: QueryList<any>;

    isLocation(href) {
        console.log(href);

        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    }

    ngAfterViewInit() {
        /*this.drawer = this.drawerComponent.sideDrawer;
        ItemsComponent.tabView = this.ref.first.nativeElement;
        //ItemsComponent.tabView.items[3].addEventListener('tap', this.hi);
        //        ItemsComponent.tabView.items.push(new TabViewItem());

        let uiTabBarCtrl = ItemsComponent.tabView.ios;
        let view = ItemsComponent.tabView.nativeView;*/
        this.ref.first.nativeElement.on(WebView.loadStartedEvent, (event) => {
            if (this.isLocation(event.url)) {

                // TODO: android logic
                // Stop the loading event
                //if (ios) {
                event.object.ios.stopLoading();
                //} else if (android) {
                //   event.object.android.stopLoading();
                // }

                // Do something depending on the coordinates in the URL
                this._router.navigateByUrl("items/locations/detail/" +
                    event.url.split('=')[1]);
            }
        });
    }


    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.forEach((params) => {
            this.searchTerm = params["term"];
        });

        this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
            + this.searchTerm + '#resInfo-2';
        console.log(this.webViewSrc)
    }
}
