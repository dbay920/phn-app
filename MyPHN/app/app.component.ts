import { Component } from "@angular/core";
import pageModule = require("ui/page");
import tabViewModule = require("ui/tab-view");

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    
})
export class AppComponent {
    constructor() {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        
            iOSEmulatorFlush: true,
        
            onMessageReceivedCallback: (message) => {
                alert(`${message.title}\n${message.body}`);
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
