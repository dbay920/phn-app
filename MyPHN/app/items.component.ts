import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "./shared/location/locations.service";

import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { ActivatedRoute, Router } from '@angular/router';

import { Color } from "color";


declare var CGSizeMake: any;

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

    constructor(private _router: Router, private locationsService: LocationsService) {
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
    }

    onCloseDrawerTap(): void {
        this.drawer.closeDrawer();
    }

    onSelectedIndexChanged(event): void {
        switch (event.newIndex) {
            case 0:
                if (this.firstTime)
                    this.firstTime = false;
                else
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
                console.log('error');
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

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;

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

}
