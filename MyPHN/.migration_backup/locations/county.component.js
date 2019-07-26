"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_service_1 = require("../shared/location/locations.service");
var county_1 = require("../shared/location/county");
var router_1 = require("@angular/router");
var services_component_1 = require("../services/services.component");
var _ = require("lodash");
var CountyComponent = /** @class */ (function () {
    function CountyComponent(route, _router, locationsService) {
        this.route = route;
        this._router = _router;
        this.locationsService = locationsService;
    }
    CountyComponent.prototype.listViewItemTap = function (i) {
        this.goToLocations(i);
    };
    CountyComponent.prototype.back = function () {
        this._router.navigateByUrl('/items');
    };
    CountyComponent.prototype.goToLocations = function (i) {
        this._router.navigateByUrl("items/(locations:locations/detail/" +
            this.locations[i].getId() + ')');
    };
    CountyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .forEach(function (params) {
            _this.county = county_1.County.buildFromName(params["id"]);
            services_component_1.ServicesComponent.services.forEach(function (service) {
                if (service.getId() == _this.county.getHref())
                    _this.county.service = service.getName();
            });
        });
        this.locationsService.getAllLocations().then(function (x) {
            var path = _this.route.snapshot.url[0].path;
            if (path === 'services') {
                _this.locationsService.getServiceLocationsText(_this.county.getHref()).then(function (y) {
                    _this.locations = _.filter(x, function (loc) {
                        return y.indexOf(loc.getName()) >= 0;
                    });
                });
            }
            else {
                _this.locations = _.filter(x, function (loc) {
                    return loc.getCounty().includes(_this.county.getName());
                });
            }
        }, function (error) { return alert("Could not load locations."); });
    };
    CountyComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./county.component.html",
            styleUrls: ["./county.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            locations_service_1.LocationsService])
    ], CountyComponent);
    return CountyComponent;
}());
exports.CountyComponent = CountyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvdW50eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFFekUsMEVBQXdFO0FBQ3hFLG9EQUFtRDtBQUNuRCwwQ0FBeUQ7QUFHekQscUVBQW1FO0FBQ25FLDBCQUE0QjtBQVM1QjtJQUtJLHlCQUFvQixLQUFxQixFQUM3QixPQUFlLEVBQ2YsZ0JBQWtDO1FBRjFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzlDLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ3RCLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBOEJDO1FBN0JHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNaLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsc0NBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ3ZDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUN4QyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFN0MsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7b0JBQ3hFLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFhO3dCQUN2QyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFhO29CQUN2QyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBTUwsQ0FBQyxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBdERRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBTzZCLHVCQUFjO1lBQ3BCLGVBQU07WUFDRyxvQ0FBZ0I7T0FQckMsZUFBZSxDQXVEM0I7SUFBRCxzQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvbG9jYXRpb24vbG9jYXRpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvdW50eSB9IGZyb20gXCIuLi9zaGFyZWQvbG9jYXRpb24vY291bnR5XCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvblwiO1xuaW1wb3J0IHsgU2VydmljZXNDb21wb25lbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvdW50eS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jb3VudHkuY29tcG9uZW50LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIENvdW50eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbj47XG4gICAgY291bnR5OiBDb3VudHk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb25zU2VydmljZTogTG9jYXRpb25zU2VydmljZSkge1xuICAgIH1cblxuICAgIGxpc3RWaWV3SXRlbVRhcChpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub0xvY2F0aW9ucyhpKTtcbiAgICB9XG5cbiAgICBiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2l0ZW1zJyk7XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9ucyhpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFxuICAgICAgICAgICAgXCJpdGVtcy8obG9jYXRpb25zOmxvY2F0aW9ucy9kZXRhaWwvXCIgK1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnNbaV0uZ2V0SWQoKSArICcpJyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHkgPSBDb3VudHkuYnVpbGRGcm9tTmFtZShwYXJhbXNbXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgU2VydmljZXNDb21wb25lbnQuc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VydmljZS5nZXRJZCgpID09IHRoaXMuY291bnR5LmdldEhyZWYoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnR5LnNlcnZpY2UgPSBzZXJ2aWNlLmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9jYXRpb25zU2VydmljZS5nZXRBbGxMb2NhdGlvbnMoKS50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aDtcblxuICAgICAgICAgICAgaWYgKHBhdGggPT09ICdzZXJ2aWNlcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uc1NlcnZpY2UuZ2V0U2VydmljZUxvY2F0aW9uc1RleHQodGhpcy5jb3VudHkuZ2V0SHJlZigpKS50aGVuKCh5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gXy5maWx0ZXIoeCwgKGxvYzogTG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5LmluZGV4T2YobG9jLmdldE5hbWUoKSkgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gXy5maWx0ZXIoeCwgKGxvYzogTG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvYy5nZXRDb3VudHkoKS5pbmNsdWRlcyh0aGlzLmNvdW50eS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgfSwgKGVycm9yKSA9PiBhbGVydChcIkNvdWxkIG5vdCBsb2FkIGxvY2F0aW9ucy5cIikpO1xuICAgIH1cbn1cbiJdfQ==