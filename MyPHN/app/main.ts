// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("@nstudio/nativescript-cardview").CardView);

const firebase = require("nativescript-plugin-firebase");

// https://docs.nativescript.org/core-concepts/error-handling
// import "./bundle-config";
// import * as application from "tns-core-modules/application";
import * as traceModule from "tns-core-modules/trace"
const errorHandler: traceModule.ErrorHandler = {
    handlerError(err) {
        //option 1 (development) - throw the error
        throw err;

        //option 2 (development) - logging the error via write method provided from trace module
        traceModule.write(err, "unhandled-error", traceModule.messageType.error);

        //(production) - custom functionality for error handling
        //reportToAnalytics(err)
    }
}

traceModule.setErrorHandler(errorHandler);

platformNativeScriptDynamic().bootstrapModule(AppModule);


