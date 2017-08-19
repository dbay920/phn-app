import { ViewChildren, QueryList, Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "./shared/location/locations.service";

import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { ActivatedRoute, Router } from '@angular/router';
import { registerElement } from 'nativescript-angular';
import { setInterval, setTimeout, clearInterval } from "timer";
import { TabView } from "ui/tab-view"

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
    public id: number;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
    ) {
        if (!android) {
            this.id = setInterval(() => {
                if (this.isMoreTab()) {
                    this.drawer.showDrawer();
                }
                let validRoutes = [
                    '/items',
                    '/items/portal',
                    '/items/news',
                ]
                let index = validRoutes.findIndex((route) => {
                    return route === this._router.url;
                })

                if (index === -1) {
                    if (this.getSelectedIndex() !== 3) {
                        this.firstTime = true;
                        this.setSelectedIndex(3);
                    }
                } else {
                    if (index !== this.getSelectedIndex()) {
                        this.firstTime = true;
                        this.setSelectedIndex(index);
                    }
                }
            }, 1000);
        }
    }

    onCloseDrawerTap(): void {
        this.drawer.closeDrawer();
    }

    getSelectedIndex(): number {
        if (!ItemsComponent.tabView)
            return -1;

        if (!android)
            return ItemsComponent.tabView.ios.selectedIndex;

        return ItemsComponent.tabView.selectedIndex;
    }

    setSelectedIndex(i) {
        ItemsComponent.tabView.selectedIndex = i;
    }

    isMoreTab(): boolean {
        let index = this.getSelectedIndex();

        return android ? false : index === 9223372036854776000;
    }

    onSelectedIndexChanged(event): void {
        if (this.firstTime) {
            this.firstTime = false;
            return;
        }

        switch (event.newIndex) {
            case 0:
                this.goToLocations(this.homeRoute.url);
                break;
            case 1:
                this.goToLocations(this.portalRoute.url);
                break;
            case 2:
                this.goToLocations(this.newsRoute.url);
                break;
            case 3:
                this.drawer.showDrawer();
                break;
            default:
                console.log('error', event.newIndex);
        }
    }

    homeRoute
    newsRoute
    portalRoute

    ngOnInit(): void {
        this.firstTime = true;
        this.SideDrawerLocation = SideDrawerLocation;
        this.homeRoute = { name: 'Home', url: 'items' };
        this.portalRoute = { name: 'Patient Portal', url: 'items/portal' };
        this.newsRoute = { name: 'News', url: 'items/news' };

        this.routes = [
            //            { name: 'Favorites', url: 'items/favorites' },
            { name: 'Search', url: 'items/search' },
            this.homeRoute,
            { name: 'Locations', url: "items/locations" },
            { name: 'Services', url: 'items/services' },
            { name: 'Providers', url: 'items/providers' },
            this.portalRoute,
            this.newsRoute,
        ];
    }

    // get reference to drawer
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    private drawer: RadSideDrawer;
    public static tabView: TabView;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;

        // protect from location interruption
        if (this.ref.first)
            ItemsComponent.tabView = this.ref.first.nativeElement;
    }

    goToLocations(url): void {
        this._router.navigateByUrl(url);
        this.drawer.closeDrawer();
    }

    favorites() {
        this._router.navigateByUrl("items/favorites");
    }

    search() {
        this._router.navigateByUrl("items/search");
    }

    @ViewChildren('ref') ref: QueryList<any>;
}
