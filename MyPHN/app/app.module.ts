import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";

import { LocationsService } from "./shared/location/locations.service";
import { ItemsComponent } from "./item/items.component";
import { SomeOtherComponent } from "./some.component";
import { StartComponent } from "./start.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        StartComponent,
        SomeOtherComponent
    ],
    providers: [
        LocationsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
