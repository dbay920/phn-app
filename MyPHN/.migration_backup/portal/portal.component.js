"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PortalComponent = /** @class */ (function () {
    function PortalComponent(_router, route) {
        /*this.route.params.forEach((params) => {
            this.searchTerm = params["term"];
        });*/
        this._router = _router;
        this.route = route;
        //this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
        //  + this.searchTerm + '#resInfo-2';
        //console.log(this.webViewSrc)
        this.webViewSrc = 'https://www.medfusion.net/primaryhealth-21154/portal/#/user/login';
    }
    PortalComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "portal.component.html",
            styleUrls: ["portal.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute])
    ], PortalComponent);
    return PortalComponent;
}());
exports.PortalComponent = PortalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcnRhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlEO0FBU3pEO0lBSUkseUJBQ1ksT0FBZSxFQUNmLEtBQXFCO1FBRTdCOzthQUVLO1FBTEcsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTTdCLCtEQUErRDtRQUMvRCxxQ0FBcUM7UUFDckMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsbUVBQW1FLENBQUM7SUFDMUYsQ0FBQztJQWhCUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU91QixlQUFNO1lBQ1IsdUJBQWM7T0FOeEIsZUFBZSxDQWlCM0I7SUFBRCxzQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwicG9ydGFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwb3J0YWwuY29tcG9uZW50LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvcnRhbENvbXBvbmVudCB7XG4gICAgd2ViVmlld1NyYztcbiAgICBzZWFyY2hUZXJtO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICAvKnRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gcGFyYW1zW1widGVybVwiXTtcbiAgICAgICAgfSk7Ki9cblxuICAgICAgICAvL3RoaXMud2ViVmlld1NyYyA9ICdodHRwczovL3ByaW1hcnktaGVhbHRoLm5ldC9TZWFyY2guYXNweD9xPSdcbiAgICAgICAgLy8gICsgdGhpcy5zZWFyY2hUZXJtICsgJyNyZXNJbmZvLTInO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMud2ViVmlld1NyYylcbiAgICAgICAgdGhpcy53ZWJWaWV3U3JjID0gJ2h0dHBzOi8vd3d3Lm1lZGZ1c2lvbi5uZXQvcHJpbWFyeWhlYWx0aC0yMTE1NC9wb3J0YWwvIy91c2VyL2xvZ2luJztcbiAgICB9XG59XG4iXX0=