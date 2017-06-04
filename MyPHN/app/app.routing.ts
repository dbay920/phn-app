import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { StartComponent } from "./start.component";
import { SomeOtherComponent } from "./some.component";
import { LocationsComponent } from "./locations/locations.component";
import { HomeComponent } from "./home/home.component";

import { ItemsComponent } from "./items.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/items",
        pathMatch: "full"
    },
    {
        path: "items",
        component: ItemsComponent,
        children: [
            // '/home' loaded into `router-outlet` in main content
            { path: "", component: HomeComponent },
            // '/home/otherPath' loaded into `router-outlet` in main content
            { path: "otherPath", component: SomeOtherComponent },
            // etc.
            { path: "locations", component: LocationsComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
