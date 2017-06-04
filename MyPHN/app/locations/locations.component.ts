import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";
import tabViewModule = require("ui/tab-view");

import { Color } from "color";


declare var CGSizeMake: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./locations.component.html",
})


export class LocationsComponent implements OnInit {
    public tabSelectedIndex: number;
    thing: number
    constructor(private locationsService: LocationsService) {
        this.tabSelectedIndex = 3;
    }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
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

    change(): void {
        this.tabSelectedIndex = 3;
        console.log(this.tabSelectedIndex);
    }
}
