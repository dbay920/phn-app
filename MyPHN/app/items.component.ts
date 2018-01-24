import * as pushPlugin from "nativescript-push-notifications";
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
import { Config } from './shared/config';
import { layout } from "utils/utils"
import { EventData } from "data/observable";

declare var android;

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

    private static getSelectedIndex(): number {
        if (!ItemsComponent.tabView)
            return -1;

        if (isIOS)
            return ItemsComponent.tabView.ios.selectedIndex;

        return ItemsComponent.tabView.selectedIndex;
    }

    public static setSelectedIndex(i) {
        ItemsComponent.tabView.selectedIndex = i;
        ItemsComponent.showActionBar();
    }

    public static showActionBar() {
        if (!ItemsComponent.tabView) {
            return;
        }

        let page = <Page>ItemsComponent.tabView.page;

        if (ItemsComponent.navCtrl)
            ItemsComponent.navCtrl.navigationBarHidden = true;
        page.actionBarHidden = false;
    }

    private static isMoreTab(): boolean {
        let index = ItemsComponent.getSelectedIndex();

        return isAndroid ? false : index === 9223372036854776000;
    }

    // hook for tab change
    public onSelectedIndexChanged(event): void {

        // hook for tab change
        if (ItemsComponent.getSelectedIndex() === 0)
            this._router.navigateByUrl('/items');
        ItemsComponent.showActionBar();
    }

    canGoBack = null;

    public ngOnInit(): void {

        // handles the hiding of the back button when it is useless
        this._router.events.subscribe((val) => {
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
        if (isAndroid) {
            this.initAndroid();
        } else {
            this.initIOS();
        }
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
                textView.setMaxWidth(layout.toDevicePixels(900)); // increase as much you want
                textView.setMaxLines(1);
            }
        }
    }

    initAndroid() {
        // handles android push notifications
        pushPlugin.register({ senderID: Config.messageSenderId }, (token: String) => {
            //   alert("Device registered. Access token: " + token);;
        }, function() { });

        pushPlugin.onMessageReceived((stringifiedData: String, fcmNotification: any) => {
            const notificationBody = fcmNotification && fcmNotification.getBody();
            alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
        });
    }

    initIOS() {
        const iosSettings = {
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                    identifier: 'READ_IDENTIFIER',
                    title: 'Read',
                    activationMode: "foreground",
                    destructive: false,
                    authenticationRequired: true
                }, {
                    identifier: 'CANCEL_IDENTIFIER',
                    title: 'Cancel',
                    activationMode: "foreground",
                    destructive: true,
                    authenticationRequired: true
                }],
                categories: [{
                    identifier: 'READ_CATEGORY',
                    actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                    actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                }]
            },
            notificationCallbackIOS: (message: any) => {
                alert("Message received!\n" + JSON.stringify(message));
            },
            senderID: Config.messageSenderId // had to add this i think
        };

        pushPlugin.register(iosSettings, (token: String) => {
            alert("Device registered. Access token: " + token);

            // Register the interactive settings
            if (iosSettings.interactiveSettings) {
                pushPlugin.registerUserNotificationSettings(() => {
                    alert('Successfully registered for interactive push.');
                }, (err) => {
                    alert('Error registering for interactive push: ' + JSON.stringify(err));
                });
            }
        }, (errorMessage: any) => {
            alert("Device NOT registered! " + JSON.stringify(errorMessage));
        });
    }

    static navCtrl;
    public ngAfterViewInit() {

        // protect from location interruption
        if (this.ref.first) {
            ItemsComponent.tabView = this.ref.first.nativeElement;

        }
        if (isIOS) {
            ItemsComponent.navCtrl =
                ItemsComponent.tabView.ios.moreNavigationController;
        }
    }

    public search() {
        this._router.navigateByUrl('/items');
        ItemsComponent.setSelectedIndex(3);
    }
}
