import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LocationsComponent } from "./locations/locations.component";
import { HomeComponent } from "./home/home.component";
import { CountyComponent } from "./locations/county.component";

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
            { path: "", component: HomeComponent },
            { path: "locations", component: LocationsComponent },
            { path: "locations/:id", component: CountyComponent },

            { path: 'favorites', component: HomeComponent },
            { path: 'search', component: HomeComponent },
            { path: 'services', component: HomeComponent },
            { path: 'providers', component: HomeComponent },
            { path: 'portal', component: HomeComponent },
            { path: 'news', component: HomeComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
