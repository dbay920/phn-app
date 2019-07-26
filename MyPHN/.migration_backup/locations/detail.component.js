"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_service_1 = require("../shared/location/locations.service");
var router_1 = require("@angular/router");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var nativescript_locate_address_1 = require("nativescript-locate-address");
var TNSPhone = require("nativescript-phone");
var LocationDetailComponent = /** @class */ (function () {
    function LocationDetailComponent(route, _router, locationsService, _ngZone) {
        this.route = route;
        this._router = _router;
        this.locationsService = locationsService;
        this._ngZone = _ngZone;
    }
    LocationDetailComponent.prototype.back = function () {
        this._router.navigateByUrl('/items');
    };
    LocationDetailComponent.prototype.myDist = function (x, y) {
        return nativescript_geolocation_1.distance(x, y);
    };
    LocationDetailComponent.prototype.callHome = function () {
        TNSPhone.dial(this.details.getContact(), true);
    };
    LocationDetailComponent.prototype.gotoProvider = function (i) {
        this._router.navigateByUrl("items/(providers:providers/" + this.details.getProviders()[i].getId());
    };
    LocationDetailComponent.prototype.providersTap = function () {
        if (this.providersVisible === 'collapse')
            this.providersVisible = 'visible';
        else
            this.providersVisible = 'collapse';
    };
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .forEach(function (params) {
            _this.locationId = params["id"];
        });
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            console.log('nonblocking');
        }
        this.locationsService.getLocationDetails(this.locationId).then(function (z) {
            _this.details = z;
            _this.cards = [
                {
                    name: 'About',
                    data: _this.details.getAbout(),
                    icon: 'res://icon_about_location',
                    visible: false
                },
                {
                    name: 'Hours',
                    data: _this.details.getHours(),
                    icon: 'res://icon_hours_location',
                    visible: false
                },
                {
                    name: 'Contact',
                    data: _this.details.getContact(),
                    icon: 'res://icon_phone_location',
                    visible: false
                }
            ];
            _this.providers = [];
            _this.details.getProviders().forEach(function (x) {
                _this.providers.push({
                    name: x.getName(),
                    data: x.getServiceName(),
                    icon: 'res://icon_providers_location',
                    image: x.getImage(),
                    visible: false
                });
            });
            _this.providersTap();
            _this.image = _this.details.getImage();
            _this.address = _this.details.getAddress().replace(', ', '\n');
            _this.name = _this.details.getName();
            var x = _this.details.getGeo();
            nativescript_geolocation_1.getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then(function (loc) {
                if (loc) {
                    var metersToMiles = 0.000621371;
                    _this.distance = (_this.myDist(x, loc)
                        * metersToMiles).toFixed(1) + ' mi';
                }
                _this._ngZone.run(function () {
                    // weird fix for arriving from webview
                });
            }, function (e) {
                console.log("Error: " + e.message);
            });
        }, function (error) { return alert("Could not load location details."); });
    };
    LocationDetailComponent.prototype.listViewItemTap = function (i) {
        this.cards[i].visible = !this.cards[i].visible;
    };
    LocationDetailComponent.prototype.navigate = function () {
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            address: this.details.getAddress(),
        }).then(function () {
            console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
        });
    };
    LocationDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./detail.component.html",
            styleUrls: ["./detail.component.css", './detail-common.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            locations_service_1.LocationsService,
            core_1.NgZone])
    ], LocationDetailComponent);
    return LocationDetailComponent;
}());
exports.LocationDetailComponent = LocationDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFHaEcsMEVBQXdFO0FBRXhFLDBDQUF5RDtBQUV6RCxxRUFBcUk7QUFDckksMkVBQTREO0FBSTVELDZDQUErQztBQVMvQztJQVVJLGlDQUNZLEtBQXFCLEVBQ3JCLE9BQWUsRUFDZixnQkFBa0MsRUFDbEMsT0FBZTtRQUhmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDdkIsQ0FBQztJQUVMLHNDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1AsT0FBTyxtQ0FBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBS0QsOENBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELDhDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O1lBRWxDLElBQUks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QSxBQS9IRCxJQStIQztBQS9IWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9jYXRpb25EZXRhaWwgfSBmcm9tIFwiLi4vc2hhcmVkL2xvY2F0aW9uL2RldGFpbFwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IExvY2F0ZUFkZHJlc3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2F0ZS1hZGRyZXNzXCI7XG5pbXBvcnQgKiBhcyBMYWJlbE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9kZXRhaWwuY29tcG9uZW50LmNzc1wiLCAnLi9kZXRhaWwtY29tbW9uLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGNhcmRzOiBBcnJheTxhbnk+O1xuICAgIHB1YmxpYyBkZXRhaWxzOiBMb2NhdGlvbkRldGFpbDtcbiAgICBwdWJsaWMgYWRkcmVzczogc3RyaW5nO1xuICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGxvY2F0aW9uSWQ7XG4gICAgcHVibGljIGRpc3RhbmNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbnNTZXJ2aWNlOiBMb2NhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICApIHsgfVxuXG4gICAgYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9pdGVtcycpO1xuICAgIH1cblxuICAgIG15RGlzdCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZSh4LCB5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEhvbWUoKSB7XG4gICAgICAgIFROU1Bob25lLmRpYWwodGhpcy5kZXRhaWxzLmdldENvbnRhY3QoKSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdmlkZXJzVmlzaWJsZTtcbiAgICBwcm92aWRlcnM7XG5cbiAgICBnb3RvUHJvdmlkZXIoaSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIml0ZW1zLyhwcm92aWRlcnM6cHJvdmlkZXJzL1wiICsgdGhpcy5kZXRhaWxzLmdldFByb3ZpZGVycygpW2ldLmdldElkKCkpO1xuICAgIH1cblxuICAgIHByb3ZpZGVyc1RhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzVmlzaWJsZSA9PT0gJ2NvbGxhcHNlJylcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzVmlzaWJsZSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnNWaXNpYmxlID0gJ2NvbGxhcHNlJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uSWQgPSBwYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vbmJsb2NraW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvY2F0aW9uc1NlcnZpY2UuZ2V0TG9jYXRpb25EZXRhaWxzKHRoaXMubG9jYXRpb25JZCkudGhlbigoeikgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWxzID0gejtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRldGFpbHMuZ2V0QWJvdXQoKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3JlczovL2ljb25fYWJvdXRfbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSG91cnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRldGFpbHMuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3JlczovL2ljb25faG91cnNfbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGV0YWlscy5nZXRDb250YWN0KCksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdyZXM6Ly9pY29uX3Bob25lX2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVycyA9IFtdXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuZ2V0UHJvdmlkZXJzKCkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB4LmdldE5hbWUoKSwgLy8nUHJvdmlkZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeC5nZXRTZXJ2aWNlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAncmVzOi8vaWNvbl9wcm92aWRlcnNfbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogeC5nZXRJbWFnZSgpLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzVGFwKCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5kZXRhaWxzLmdldEltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSB0aGlzLmRldGFpbHMuZ2V0QWRkcmVzcygpLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kZXRhaWxzLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLmRldGFpbHMuZ2V0R2VvKCk7XG5cbiAgICAgICAgICAgIGdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAzLCB1cGRhdGVEaXN0YW5jZTogMTAsIHRpbWVvdXQ6IDMwMDAwXG4gICAgICAgICAgICB9KS50aGVuKChsb2MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXRlcnNUb01pbGVzID0gMC4wMDA2MjEzNzE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9ICh0aGlzLm15RGlzdCh4LCBsb2MpXG4gICAgICAgICAgICAgICAgICAgICAgICAqIG1ldGVyc1RvTWlsZXMpLnRvRml4ZWQoMSkgKyAnIG1pJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlaXJkIGZpeCBmb3IgYXJyaXZpbmcgZnJvbSB3ZWJ2aWV3XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJDb3VsZCBub3QgbG9hZCBsb2NhdGlvbiBkZXRhaWxzLlwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxpc3RWaWV3SXRlbVRhcChpKSB7XG4gICAgICAgIHRoaXMuY2FyZHNbaV0udmlzaWJsZSA9ICF0aGlzLmNhcmRzW2ldLnZpc2libGU7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIGxldCBsb2NhdG9yID0gbmV3IExvY2F0ZUFkZHJlc3MoKTtcbiAgICAgICAgbG9jYXRvci5sb2NhdGUoe1xuICAgICAgICAgICAgYWRkcmVzczogdGhpcy5kZXRhaWxzLmdldEFkZHJlc3MoKSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==