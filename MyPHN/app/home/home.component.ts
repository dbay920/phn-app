import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { LocationsService } from "../shared/location/locations.service";

import { ActivatedRoute, Router } from '@angular/router';
import { Color } from "color";


declare var CGSizeMake: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})


export class HomeComponent implements OnInit {
    public tabSelectedIndex: number;
    thing: number
    constructor(private _router: Router, private locationsService: LocationsService) {
        this.tabSelectedIndex = 3;
    }

    goToLocations(): void {
        this._router.navigateByUrl("items/locations");

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
        /*        this.locationsService.getCounties().then((x) => {
                    console.log(x[0].getName(), x[0].getHref());
                },
                    (error) => alert("Unfortunately we could not find your account." + error)
                );*/


    }


}
