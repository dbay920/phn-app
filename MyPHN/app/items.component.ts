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
    public static tabView: TabView;

    @ViewChildren('ref') ref: QueryList<any>;

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
        private routerExtensions: RouterExtensions,
    ) {
    }

    public goBack() {
        this.routerExtensions.back();
    }

    private getSelectedIndex(): number {
        if (!ItemsComponent.tabView)
            return -1;

        if (isIOS)
            return ItemsComponent.tabView.ios.selectedIndex;

        return ItemsComponent.tabView.selectedIndex;
    }

    public static setSelectedIndex(i) {
        ItemsComponent.tabView.selectedIndex = i;
    }

    private isMoreTab(): boolean {
        let index = this.getSelectedIndex();

        return isAndroid ? false : index === 9223372036854776000;
    }

    public onSelectedIndexChanged(event): void {
        // hook for tab change
    }

    public ngOnInit(): void {

    }

    public ngAfterViewInit() {

        // protect from location interruption
        if (this.ref.first)
            ItemsComponent.tabView = this.ref.first.nativeElement;
    }

    public search() {
        ItemsComponent.setSelectedIndex(3);
    }
}
