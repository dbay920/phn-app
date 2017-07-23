import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { LocationsService } from "./shared/location/locations.service";
import { ItemsComponent } from "./items.component";
import { HomeComponent } from "./home/home.component";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailComponent } from "./locations/detail.component";
import { CountyComponent } from "./locations/county.component";
import { CensusService } from "./shared/census/census.service"
import { ServicesComponent } from "./services/services.component"
import { SearchComponent } from "./search/search.component"
import { SearchTermComponent } from "./search/term.component"
import { PortalComponent } from "./portal/portal.component"
import { ServicesService } from "./shared/services/services.service"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        HomeComponent,
        ServicesComponent,
        SearchComponent,
        PortalComponent,
        SearchTermComponent,
        CountyComponent,
        LocationsComponent,
        LocationDetailComponent,
    ],
    providers: [
        LocationsService,
        CensusService,
        ServicesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
