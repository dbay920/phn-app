// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { isAndroid, isIOS, device, screen } from "platform";

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

const firebase = require("nativescript-plugin-firebase");

platformNativeScriptDynamic().bootstrapModule(AppModule);


