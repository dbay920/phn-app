import {
    ViewChildren, QueryList, Component, OnInit, ElementRef, ViewChild,
    AfterViewInit,
} from "@angular/core";
import { ActivatedRoute, Router, } from '@angular/router';
import { View } from "ui/core/view";
import { LocationsService } from "./shared/location/locations.service";

import { registerElement, RouterExtensions } from 'nativescript-angular';
import { setInterval, setTimeout, clearInterval } from "timer";
import { TabView } from "ui/tab-view"
import { isAndroid, isIOS, device, screen } from "platform";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['items.component.css', 'items-common.css']
})

export class ItemsComponent implements OnInit, AfterViewInit {
    public SideDrawerLocation: any;
    routes: Array<any>;
    public firstTime: boolean;
    public static id: number;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
        private routerExtensions: RouterExtensions,
    ) {
    }

    public goBack() {
        this.routerExtensions.back();
    }

    getSelectedIndex(): number {
        if (!ItemsComponent.tabView)
            return -1;

        if (isIOS)
            return ItemsComponent.tabView.ios.selectedIndex;

        return ItemsComponent.tabView.selectedIndex;
    }

    setSelectedIndex(i) {
        ItemsComponent.tabView.selectedIndex = i;
    }

    isMoreTab(): boolean {
        let index = this.getSelectedIndex();

        return isAndroid ? false : index === 9223372036854776000;
    }

    onSelectedIndexChanged(event): void {
        let url = this.routes[event.newIndex];

        if (this.firstTime) {
            this.firstTime = false;
            return;
        }
        if (url) {
            this.goToLocations(url.url);
        }
    }

    homeRoute;
    newsRoute;
    portalRoute;
    topVal;
    heightVal;

    ngOnInit(): void {
        this.topVal = 0;//68;
        this.heightVal = isAndroid ? 72 : 50;
        this.firstTime = true;
        this.homeRoute = { name: 'Home', url: 'items' };
        this.portalRoute = { name: 'Patient Portal', url: 'items/portal' };
        this.newsRoute = { name: 'News', url: 'items/news' };

        this.routes = [
            this.homeRoute,
            this.portalRoute,
            this.newsRoute,

            //            { name: 'Favorites', url: 'items/favorites' },
            { name: 'Search', url: 'items/search' },
            { name: 'Locations', url: "items/locations" },
            { name: 'Services', url: 'items/services' },
            { name: 'Providers', url: 'items/providers' },
        ];
    }

    // get reference to drawer
    public static tabView: TabView;

    ngAfterViewInit() {

        // protect from location interruption
        if (this.ref.first)
            ItemsComponent.tabView = this.ref.first.nativeElement;
    }

    goToLocations(url): void {
        this._router.navigateByUrl(url);
    }

    favorites() {
        this._router.navigateByUrl("items/favorites");
    }

    search() {
        this._router.navigateByUrl("items/search");
    }

    @ViewChildren('ref') ref: QueryList<any>;
}
