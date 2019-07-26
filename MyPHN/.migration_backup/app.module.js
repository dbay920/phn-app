"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var forms_1 = require("nativescript-angular/forms");
var locations_service_1 = require("./shared/location/locations.service");
var items_component_1 = require("./items.component");
var home_component_1 = require("./home/home.component");
var locations_component_1 = require("./locations/locations.component");
var detail_component_1 = require("./locations/detail.component");
var county_component_1 = require("./locations/county.component");
//import { CensusService } from "./shared/census/census.service"
var services_component_1 = require("./services/services.component");
var detail_component_2 = require("./services/detail.component");
var providers_component_1 = require("./providers/providers.component");
var detail_component_3 = require("./providers/detail.component");
var search_component_1 = require("./search/search.component");
var term_component_1 = require("./search/term.component");
var portal_component_1 = require("./portal/portal.component");
var services_service_1 = require("./shared/services/services.service");
var providers_service_1 = require("./shared/providers/providers.service");
var news_component_1 = require("./news/news.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                home_component_1.HomeComponent,
                services_component_1.ServicesComponent,
                detail_component_2.ServiceDetailComponent,
                providers_component_1.ProvidersComponent,
                detail_component_3.ProviderDetailComponent,
                search_component_1.SearchComponent,
                portal_component_1.PortalComponent,
                term_component_1.SearchTermComponent,
                news_component_1.NewsComponent,
                county_component_1.CountyComponent,
                locations_component_1.LocationsComponent,
                detail_component_1.LocationDetailComponent,
            ],
            providers: [
                locations_service_1.LocationsService,
                //        CensusService,
                services_service_1.ServicesService,
                providers_service_1.ProvidersService,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msc0NBQTJDO0FBQzNDLGtFQUF3RjtBQUN4RixvREFBb0U7QUFFcEUseUVBQXVFO0FBQ3ZFLHFEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsdUVBQXFFO0FBQ3JFLGlFQUF1RTtBQUN2RSxpRUFBK0Q7QUFDL0QsZ0VBQWdFO0FBQ2hFLG9FQUFpRTtBQUNqRSxnRUFBb0U7QUFDcEUsdUVBQW9FO0FBQ3BFLGlFQUFzRTtBQUN0RSw4REFBMkQ7QUFDM0QsMERBQTZEO0FBQzdELDhEQUEyRDtBQUMzRCx1RUFBb0U7QUFDcEUsMEVBQXVFO0FBQ3ZFLHdEQUFxRDtBQXVDckQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHdDQUE4QjtnQkFDOUIsK0JBQXVCO2dCQUN2QixpQkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIseUNBQXNCO2dCQUN0Qix3Q0FBa0I7Z0JBQ2xCLDBDQUF1QjtnQkFDdkIsa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2Ysb0NBQW1CO2dCQUNuQiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZix3Q0FBa0I7Z0JBQ2xCLDBDQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxvQ0FBZ0I7Z0JBQ2hCLHdCQUF3QjtnQkFDeEIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuXG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2xvY2F0aW9uL2xvY2F0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2NhdGlvbkRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2xvY2F0aW9ucy9kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb3VudHlDb21wb25lbnQgfSBmcm9tIFwiLi9sb2NhdGlvbnMvY291bnR5LmNvbXBvbmVudFwiO1xuLy9pbXBvcnQgeyBDZW5zdXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2NlbnN1cy9jZW5zdXMuc2VydmljZVwiXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gXCIuL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTZXJ2aWNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VydmljZXMvZGV0YWlsLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBQcm92aWRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9wcm92aWRlcnMvcHJvdmlkZXJzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBQcm92aWRlckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Byb3ZpZGVycy9kZXRhaWwuY29tcG9uZW50XCJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCJcbmltcG9ydCB7IFNlYXJjaFRlcm1Db21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvdGVybS5jb21wb25lbnRcIlxuaW1wb3J0IHsgUG9ydGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9ydGFsL3BvcnRhbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2VydmljZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2VzLnNlcnZpY2VcIlxuaW1wb3J0IHsgUHJvdmlkZXJzU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9wcm92aWRlcnMvcHJvdmlkZXJzLnNlcnZpY2VcIlxuaW1wb3J0IHsgTmV3c0NvbXBvbmVudCB9IGZyb20gXCIuL25ld3MvbmV3cy5jb21wb25lbnRcIlxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgU2VydmljZXNDb21wb25lbnQsXG4gICAgICAgIFNlcnZpY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFByb3ZpZGVyc0NvbXBvbmVudCxcbiAgICAgICAgUHJvdmlkZXJEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICAgICAgUG9ydGFsQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hUZXJtQ29tcG9uZW50LFxuICAgICAgICBOZXdzQ29tcG9uZW50LFxuICAgICAgICBDb3VudHlDb21wb25lbnQsXG4gICAgICAgIExvY2F0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgTG9jYXRpb25EZXRhaWxDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9jYXRpb25zU2VydmljZSxcbiAgICAgICAgLy8gICAgICAgIENlbnN1c1NlcnZpY2UsXG4gICAgICAgIFNlcnZpY2VzU2VydmljZSxcbiAgICAgICAgUHJvdmlkZXJzU2VydmljZSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19