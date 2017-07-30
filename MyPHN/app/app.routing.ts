import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailComponent } from "./locations/detail.component";
import { HomeComponent } from "./home/home.component";
import { CountyComponent } from "./locations/county.component";
import { ServicesComponent } from "./services/services.component"
import { SearchComponent } from "./search/search.component"
import { SearchTermComponent } from "./search/term.component"
import { PortalComponent } from "./portal/portal.component"
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

            // default route
            { path: "", component: HomeComponent },
            //{ path: "", component: ServicesComponent },

            // Location tree
            { path: "locations", component: LocationsComponent },
            { path: "locations/:id", component: CountyComponent },
            {
                path: "locations/detail/:id",
                component: LocationDetailComponent
            },

            // favorites
            { path: 'favorites', component: ServicesComponent },

            // search tree
            { path: 'search', component: SearchComponent },
            { path: 'search/:term', component: SearchTermComponent },

            // services
            { path: 'services', component: ServicesComponent },

            // providers
            { path: 'providers', component: ServicesComponent },
            { path: 'portal', component: PortalComponent },
            { path: 'news', component: ServicesComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
