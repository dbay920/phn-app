import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "./shared/location/locations.service";
import tabViewModule = require("ui/tab-view");
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
    constructor(private _router: Router, private locationsService: LocationsService) {
        this.tabSelectedIndex = 3;
        this.SideDrawerLocation = SideDrawerLocation;
    }

    onCloseDrawerTap(): void {
        this.drawer.closeDrawer();
    }

    ngOnInit(): void {
        this.thing = 0;

        /*this.locationsService.getCountyLocations().then((x) => {
            let str = JSON.stringify(x, null, 4)
            console.log(str);
        },
            (error) => alert("Unfortunately we could not find your account.")
        );*/
        this.locationsService.getCounties().then((x) => {
            console.log(x[0].getName(), x[0].getHref());
        },
            (error) => alert("Unfortunately we could not find your account." + error)
        );


    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;

    }

    goToLocations(): void {
        this._router.navigateByUrl("items/locations");
        this.drawer.closeDrawer();
    }
}
