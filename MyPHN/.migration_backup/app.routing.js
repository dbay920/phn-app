"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var locations_component_1 = require("./locations/locations.component");
var detail_component_1 = require("./locations/detail.component");
var home_component_1 = require("./home/home.component");
var county_component_1 = require("./locations/county.component");
var services_component_1 = require("./services/services.component");
var detail_component_2 = require("./services/detail.component");
var providers_component_1 = require("./providers/providers.component");
var detail_component_3 = require("./providers/detail.component");
var news_component_1 = require("./news/news.component");
var search_component_1 = require("./search/search.component");
var term_component_1 = require("./search/term.component");
var portal_component_1 = require("./portal/portal.component");
var items_component_1 = require("./items.component");
var routes = [
    {
        path: "",
        redirectTo: "/items",
        pathMatch: "full"
    },
    {
        path: "items",
        component: items_component_1.ItemsComponent,
        children: [
            // default route
            { path: "", component: home_component_1.HomeComponent, outlet: 'home' },
            // Location tree
            {
                path: "",
                component: locations_component_1.LocationsComponent,
                outlet: 'locations'
            },
            {
                path: "locations/:id",
                component: county_component_1.CountyComponent,
                outlet: 'locations'
            },
            {
                path: "locations/detail/:id",
                component: detail_component_1.LocationDetailComponent,
                outlet: 'locations'
            },
            // favorites
            { path: 'favorites', component: services_component_1.ServicesComponent },
            // search tree
            { path: '', component: search_component_1.SearchComponent, outlet: 'search' },
            {
                path: 'search/:term',
                component: term_component_1.SearchTermComponent,
                outlet: 'search'
            },
            // services
            {
                path: '',
                component: services_component_1.ServicesComponent,
                outlet: 'services'
            },
            {
                path: 'services/:id',
                component: county_component_1.CountyComponent,
                outlet: 'services'
            },
            // providers
            {
                path: '',
                component: providers_component_1.ProvidersComponent,
                outlet: 'providers'
            },
            {
                path: 'providers/services/:id',
                component: detail_component_2.ServiceDetailComponent,
                outlet: 'providers'
            },
            {
                path: 'providers/:id',
                component: detail_component_3.ProviderDetailComponent,
                outlet: 'providers'
            },
            // portal
            { path: '', component: portal_component_1.PortalComponent, outlet: 'portal' },
            // news
            { path: '', component: news_component_1.NewsComponent, outlet: 'news' },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsdUVBQXFFO0FBQ3JFLGlFQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsaUVBQStEO0FBQy9ELG9FQUFpRTtBQUNqRSxnRUFBb0U7QUFDcEUsdUVBQW9FO0FBQ3BFLGlFQUFzRTtBQUN0RSx3REFBc0Q7QUFDdEQsOERBQTJEO0FBQzNELDBEQUE2RDtBQUM3RCw4REFBMkQ7QUFDM0QscURBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7UUFDekIsUUFBUSxFQUFFO1lBRU4sZ0JBQWdCO1lBQ2hCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBRXRELGdCQUFnQjtZQUNoQjtnQkFDSSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsd0NBQWtCO2dCQUM3QixNQUFNLEVBQUUsV0FBVzthQUN0QjtZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsa0NBQWU7Z0JBQzFCLE1BQU0sRUFBRSxXQUFXO2FBQ3RCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsU0FBUyxFQUFFLDBDQUF1QjtnQkFDbEMsTUFBTSxFQUFFLFdBQVc7YUFDdEI7WUFFRCxZQUFZO1lBQ1osRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtZQUVuRCxjQUFjO1lBQ2QsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7WUFDMUQ7Z0JBQ0ksSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSxvQ0FBbUI7Z0JBQzlCLE1BQU0sRUFBRSxRQUFRO2FBQ25CO1lBRUQsV0FBVztZQUNYO2dCQUNJLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxzQ0FBaUI7Z0JBQzVCLE1BQU0sRUFBRSxVQUFVO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSxrQ0FBZTtnQkFDMUIsTUFBTSxFQUFFLFVBQVU7YUFDckI7WUFFRCxZQUFZO1lBQ1o7Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHdDQUFrQjtnQkFDN0IsTUFBTSxFQUFFLFdBQVc7YUFDdEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixTQUFTLEVBQUUseUNBQXNCO2dCQUNqQyxNQUFNLEVBQUUsV0FBVzthQUN0QjtZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsMENBQXVCO2dCQUNsQyxNQUFNLEVBQUUsV0FBVzthQUN0QjtZQUVELFNBQVM7WUFDVCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtZQUUxRCxPQUFPO1lBQ1AsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7U0FDekQ7S0FDSjtDQUVKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2NhdGlvbkRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9ucy9kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ291bnR5Q29tcG9uZW50IH0gZnJvbSBcIi4vbG9jYXRpb25zL2NvdW50eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlcnZpY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50XCJcbmltcG9ydCB7IFNlcnZpY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kZXRhaWwuY29tcG9uZW50XCJcbmltcG9ydCB7IFByb3ZpZGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb3ZpZGVycy9wcm92aWRlcnMuY29tcG9uZW50XCJcbmltcG9ydCB7IFByb3ZpZGVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvdmlkZXJzL2RldGFpbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTmV3c0NvbXBvbmVudCB9IGZyb20gXCIuL25ld3MvbmV3cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCJcbmltcG9ydCB7IFNlYXJjaFRlcm1Db21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvdGVybS5jb21wb25lbnRcIlxuaW1wb3J0IHsgUG9ydGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9ydGFsL3BvcnRhbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtcy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLFxuICAgICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiaXRlbXNcIixcbiAgICAgICAgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcblxuICAgICAgICAgICAgLy8gZGVmYXVsdCByb3V0ZVxuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIG91dGxldDogJ2hvbWUnIH0sXG5cbiAgICAgICAgICAgIC8vIExvY2F0aW9uIHRyZWVcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTG9jYXRpb25zQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIG91dGxldDogJ2xvY2F0aW9ucydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJsb2NhdGlvbnMvOmlkXCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb3VudHlDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgb3V0bGV0OiAnbG9jYXRpb25zJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImxvY2F0aW9ucy9kZXRhaWwvOmlkXCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBMb2NhdGlvbkRldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBvdXRsZXQ6ICdsb2NhdGlvbnMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBmYXZvcml0ZXNcbiAgICAgICAgICAgIHsgcGF0aDogJ2Zhdm9yaXRlcycsIGNvbXBvbmVudDogU2VydmljZXNDb21wb25lbnQgfSxcblxuICAgICAgICAgICAgLy8gc2VhcmNoIHRyZWVcbiAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50LCBvdXRsZXQ6ICdzZWFyY2gnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3NlYXJjaC86dGVybScsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBTZWFyY2hUZXJtQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIG91dGxldDogJ3NlYXJjaCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIHNlcnZpY2VzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBTZXJ2aWNlc0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBvdXRsZXQ6ICdzZXJ2aWNlcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3NlcnZpY2VzLzppZCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb3VudHlDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgb3V0bGV0OiAnc2VydmljZXMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBwcm92aWRlcnNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFByb3ZpZGVyc0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBvdXRsZXQ6ICdwcm92aWRlcnMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdwcm92aWRlcnMvc2VydmljZXMvOmlkJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFNlcnZpY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgb3V0bGV0OiAncHJvdmlkZXJzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncHJvdmlkZXJzLzppZCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQcm92aWRlckRldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBvdXRsZXQ6ICdwcm92aWRlcnMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBwb3J0YWxcbiAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogUG9ydGFsQ29tcG9uZW50LCBvdXRsZXQ6ICdwb3J0YWwnIH0sXG5cbiAgICAgICAgICAgIC8vIG5ld3NcbiAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogTmV3c0NvbXBvbmVudCwgb3V0bGV0OiAnbmV3cycgfSxcbiAgICAgICAgXVxuICAgIH0sXG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=