import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { Item } from "./item";
import { UserService } from "../shared/user.service";
import tabViewModule = require("ui/tab-view");

import { Color } from "color";

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

declare var CGSizeMake: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})

export class ItemsComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        this.userService.getCountyLocations().then((x) => {
            console.log(x);
        },
            (error) => alert("Unfortunately we could not find your account.")
        );
    }
}
