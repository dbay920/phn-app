import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailComponent } from "./locations/detail.component";
import { HomeComponent } from "./home/home.component";
import { CountyComponent } from "./locations/county.component";
import { ServicesComponent } from "./services/services.component"
import { ServiceDetailComponent } from "./services/detail.component"
import { ProvidersComponent } from "./providers/providers.component"
import { ProviderDetailComponent } from "./providers/detail.component"
import { NewsComponent } from "./news/news.component";
import { SearchComponent } from "./search/search.component"
import { SearchTermComponent } from "./search/term.component"
import { PortalComponent } from "./portal/portal.component"
import { ItemsComponent } from "./items.component";
import { NipbudComponent} from "./src/app/nipbud/nipbud.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/nipbud",
        pathMatch: "full"
    },
    {
        path: "nipbud",
        component: NipbudComponent,
    },
    {
        path: "items",
        component: ItemsComponent,
        children: [

            // default route
            { path: "", component: HomeComponent, outlet: 'home' },

            // Location tree
            {
                path: "",
                component: LocationsComponent,
                outlet: 'locations'
            },
            {
                path: "locations/:id",
                component: CountyComponent,
                outlet: 'locations'
            },
            {
                path: "locations/detail/:id",
                component: LocationDetailComponent,
                outlet: 'locations'
            },

            // favorites
            { path: 'favorites', component: ServicesComponent },

            // search tree
            { path: '', component: SearchComponent, outlet: 'search' },
            {
                path: 'search/:term',
                component: SearchTermComponent,
                outlet: 'search'
            },

            // services
            {
                path: '',
                component: ServicesComponent,
                outlet: 'services'
            },
            {
                path: 'services/:id',
                component: CountyComponent,
                outlet: 'services'
            },

            // providers
            {
                path: '',
                component: ProvidersComponent,
                outlet: 'providers'
            },
            {
                path: 'providers/services/:id',
                component: ServiceDetailComponent,
                outlet: 'providers'
            },
            {
                path: 'providers/:id',
                component: ProviderDetailComponent,
                outlet: 'providers'
            },

            // portal
            { path: '', component: PortalComponent, outlet: 'portal' },

            // news
            { path: '', component: NewsComponent, outlet: 'news' },
        ]
    },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
