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
import { ActionBar } from "ui/action-bar"
import { Page } from "ui/page"
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
    public static actionBar: ActionBar;

    @ViewChildren('ref') ref: QueryList<any>;
    @ViewChildren('action') action: QueryList<any>;

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

    // hook for tab change
    public onSelectedIndexChanged(event): void {
        if (!ItemsComponent.tabView)
            return;

        let page = <Page>ItemsComponent.tabView.page;

        page.actionBarHidden = false;
    }


    canGoBack;
    public ngOnInit(): void {

        // handles the hiding of the back button when it is useless
        this._router.events.subscribe((val) => {
            //console.log(val);
            let switchHash = {
                locations: 4,
                services: 5,
                providers: 6,
                portal: 1,
                news: 2,
                search: 3
            }
            let part = val['url'];
            if (part) {
                part = part.split('(')[1]

                if (part) {
                    part = part.split(':')[0]
                    part = switchHash[part]
                    if (part)
                        ItemsComponent.setSelectedIndex(part)
                }

            }
            this.canGoBack = this.routerExtensions.canGoBack();
        });
    }

    public ngAfterViewInit() {
        let navCtrl;

        // protect from location interruption
        if (this.ref.first) {
            ItemsComponent.tabView = this.ref.first.nativeElement;
            navCtrl = ItemsComponent.tabView.ios.moreNavigationController;
            navCtrl.navigationBarHidden = true;
        }
    }

    public search() {
        ItemsComponent.setSelectedIndex(3);
    }
}
