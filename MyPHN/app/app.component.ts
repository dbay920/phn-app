import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { ActionbarService } from "./src/app/actionbar.service";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",

})
export class AppComponent {
    constructor(
        private _Router:Router,
        private page:Page,
        private ab:ActionbarService,
    ) {
        this._Router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                const rootFrame = topmost();

                ab.registerPage(rootFrame);
            }
        });
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.

            iOSEmulatorFlush: true,

            onMessageReceivedCallback: (message) => {
                alert(`${message.body}`);
                // if your server passed a custom property called 'foo', then do this:
                //console.log(`Value of 'foo': ${message.data.foo}`);
            }

        }).then(
            instance => {
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
            );
    }
}
