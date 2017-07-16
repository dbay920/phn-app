import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailComponent } from "./locations/detail.component";
import { HomeComponent } from "./home/home.component";
import { CountyComponent } from "./locations/county.component";
import { ServicesComponent } from "./services/services.component"
import { SearchComponent } from "./search/search.component"
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
            { path: "locations/detail/:id", component: LocationDetailComponent },

            { path: 'favorites', component: HomeComponent },
            { path: 'search', component: SearchComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'providers', component: HomeComponent },
            { path: 'portal', component: ServicesComponent },
            { path: 'news', component: ServicesComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
