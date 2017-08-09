import { ViewChildren, QueryList, Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "./shared/location/locations.service";

import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { ActivatedRoute, Router } from '@angular/router';
import { registerElement } from 'nativescript-angular';
import { setInterval, setTimeout, clearInterval } from "timer";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['items.component.css']
})

export class ItemsComponent implements OnInit, AfterViewInit {
    public tabSelectedIndex: number;
    public SideDrawerLocation: any;
    thing: number
    routes: Array<any>;
    public firstTime: boolean;
    public id: number;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
    ) {
        this.firstTime = true;
        this.tabSelectedIndex = 3;
        this.SideDrawerLocation = SideDrawerLocation;

        this.routes = [
            { name: 'Favorites', url: 'items/favorites' },
            { name: 'Search', url: 'items/search' },
            { name: 'Home', url: 'items' },
            { name: 'Locations', url: "items/locations" },
            { name: 'Services', url: 'items/services' },
            { name: 'Providers', url: 'items/providers' },
            { name: 'Patient Portal', url: 'items/portal' },
            { name: 'News', url: 'items/news' },
        ];

        // TODO: android behavior
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

    onCloseDrawerTap(): void {
        this.drawer.closeDrawer();
    }

    getSelectedIndex(): number {

        // TODO: android behavior
        if (!ItemsComponent.tabView)
            return -1;

        return ItemsComponent.tabView.ios.selectedIndex;
    }

    setSelectedIndex(i) {
        ItemsComponent.tabView.selectedIndex = i;
    }

    isMoreTab(): boolean {

        // TODO: android behavior
        return this.getSelectedIndex() === 9223372036854776000
    }

    onSelectedIndexChanged(event): void {
        if (this.firstTime) {
            this.firstTime = false;
            return;
        }

        switch (event.newIndex) {
            case 0:
                this.goToLocations(this.routes[2].url);
                break;
            case 1:
                this.goToLocations(this.routes[6].url);
                break;
            case 2:
                this.goToLocations(this.routes[7].url);
                break;
            case 3:
                this.drawer.showDrawer();
                break;
            default:
                console.log('error', event.newIndex);
        }
    }

    ngOnInit(): void {
        this.thing = 0;

        /*        this.locationsService.getCounties().then((x) => {
             //       console.log(x[0].getName(), x[0].getHref());
                },
                    (error) => alert("Unfortunately we could not find your account." + error)
                );*/


    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    public static tabView;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        ItemsComponent.tabView = this.ref.first.nativeElement;
        //ItemsComponent.tabView.items[3].addEventListener('tap', this.hi);
        //        ItemsComponent.tabView.items.push(new TabViewItem());

        let uiTabBarCtrl = ItemsComponent.tabView.ios;
        let view = ItemsComponent.tabView.nativeView;
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
