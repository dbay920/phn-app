import {
    ViewChildren, QueryList, Component, OnInit, ElementRef, ViewChild,
    AfterViewInit,
} from "@angular/core";
import { ActivatedRoute, Router, } from '@angular/router';
import { View } from "tns-core-modules/ui/core/view";

import { registerElement, RouterExtensions } from 'nativescript-angular';
import { setInterval, setTimeout, clearInterval } from "tns-core-modules/timer";
import { TabView } from "tns-core-modules/ui/tab-view"
import { ActionBar } from "tns-core-modules/ui/action-bar"
import { Page } from "tns-core-modules/ui/page"
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { layout } from "tns-core-modules/utils/utils"
import { EventData } from "tns-core-modules/data/observable";
import { setCurrentOrientation, orientationCleanup } from 'nativescript-screen-orientation';
import { enableLocationRequest } from "nativescript-geolocation";

declare var android;

@Component({
    selector: "ns-nipbud",
    moduleId: module.id,
    templateUrl: "./nipbud.component.html",
})

export class NipbudComponent implements OnInit, AfterViewInit {
    public SideDrawerLocation: any;
    public static tabView: TabView;
    public static actionBar: ActionBar;

    @ViewChildren('ref') ref: QueryList<any>;
    @ViewChildren('action') action: QueryList<any>;

    constructor(
        private _router: Router,
        private routerExtensions: RouterExtensions,
        private page: Page,
    ) {
        page.on("navigatedTo", function() {
            setCurrentOrientation("portrait", function() {
                console.log("portrait orientation");
            });
        });
        page.on("navigatingFrom", function() {
            orientationCleanup();
        });
    }

    public goBack() {
        this.routerExtensions.back();
    }

    public ngOnInit(): void {

    }

    onLoaded(event: EventData) {
        if (isAndroid) {
            const tabView = (<any>event.object)._tabLayout.getChildAt(0);
            for (let i = 0; i < tabView.getChildCount(); i++) {
                const tabItem = tabView.getChildAt(i),
                    textView = tabItem.getChildAt(1);
                tabItem.setLayoutParams(
                    new android.widget.LinearLayout
                        .LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
                            android.view.ViewGroup.LayoutParams.MATCH_PARENT)
                );
                textView.setMaxWidth(layout.toDevicePixels(800)); // increase as much you want
                textView.setMaxLines(1);
            }
        }
    }

    static navCtrl;
    public ngAfterViewInit() {

    }

    private getLocation() {
        enableLocationRequest().then(x => {
            console.log(x);
        });

    }
}
