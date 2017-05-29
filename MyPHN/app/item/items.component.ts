import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { View } from "ui/core/view";
import { Item } from "./item";
import { ItemService } from "./item.service";
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

    @ViewChild('locations') locations: ElementRef;
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        console.log('joe');
        //let myTextField = this.locations.nativeElement;
        /*myTextField.layer.masksToBounds = false;
        myTextField.layer.shadowOpacity = 1.0;
        myTextField.layer.shadowRadius = 0.0;
        myTextField.layer.shadowColor = new Color('#000000').ios.CGColor;*/
        /*   myTextField.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0);*/
    }
}
