import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";

import { LocationsService } from "./shared/location/locations.service";
import { ItemsComponent } from "./items.component";
import { HomeComponent } from "./home/home.component";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailComponent } from "./locations/detail.component";
import { CountyComponent } from "./locations/county.component";
import { CensusService } from "./shared/census/census.service"

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
        HomeComponent,
        CountyComponent,
        LocationsComponent,
        LocationDetailComponent,
    ],
    providers: [
        LocationsService,
        CensusService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
