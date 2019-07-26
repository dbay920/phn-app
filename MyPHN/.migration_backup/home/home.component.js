"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_service_1 = require("../shared/location/locations.service");
var router_1 = require("@angular/router");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var nativescript_locate_address_1 = require("nativescript-locate-address");
var items_component_1 = require("../items.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, locationsService) {
        this._router = _router;
        this.locationsService = locationsService;
    }
    HomeComponent.prototype.myDist = function (x, y) {
        return nativescript_geolocation_1.distance(x, y);
    };
    HomeComponent.prototype.goToUrl = function (url) {
        this._router.navigateByUrl('');
        items_component_1.ItemsComponent.setSelectedIndex(url);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Loading image to show while detecting location
        this.image = 'res://loadingscreen'; // TODO: change me
        // Cards to show on home screen
        this.cards = [
            {
                name: 'Locations',
                image: 'res://icon_location_home',
                url: 4
            }, {
                name: 'Services',
                image: 'res://icon_service_home',
                url: 5
            }, {
                name: 'Providers',
                image: 'res://icon_provider_home',
                url: 6
            }
        ];
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            console.log('nonblocking');
        }
        this.locationsService.getAllLocations().then(function (countyLats) {
            nativescript_geolocation_1.getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then(function (loc) {
                if (loc) {
                    var metersToMiles_1 = 0.000621371;
                    var minDist_1 = 8000;
                    var minCounty_1;
                    countyLats.forEach(function (feature) {
                        var location = feature.getGeo();
                        var dist = _this.myDist(location, loc) * metersToMiles_1;
                        if (dist < minDist_1) {
                            minDist_1 = dist;
                            minCounty_1 = feature;
                        }
                    });
                    _this.name = minCounty_1.getName();
                    _this.address = minCounty_1.getAddress().replace(', ', '\n');
                    _this.distance = minDist_1.toFixed(1) + ' mi';
                    _this.image = minCounty_1.getImage();
                }
            }, function (e) {
                // image to show when we cannot determine location
                this.image = 'res://icon_location_home'; // TODO: change me
            });
        });
    };
    HomeComponent.prototype.navigate = function () {
        var _this = this;
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.available().then(function (avail) {
            if (!avail) {
                alert("maps not available");
            }
            else {
                locator.locate({
                    address: _this.address.replace('\n', '%2C').replace(/ /g, '+').replace(',', '%2C'),
                }).then(function () {
                    console.log("Maps app launched.");
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            //change templateUrl to component_test to view test page in emulator
            templateUrl: "./home.component.html",
            styleUrls: ['home.css', 'home-common.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            locations_service_1.LocationsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwRUFBd0U7QUFDeEUsMENBQXlEO0FBR3pELHFFQUFxSTtBQUNySSwyRUFBNEQ7QUFDNUQsc0RBQW9EO0FBWXBEO0lBU0ksdUJBQ1ksT0FBZSxFQUNmLGdCQUFrQztRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUc5QyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1AsT0FBTyxtQ0FBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QixnQ0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBdURDO1FBdERHLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCO1FBRXRELCtCQUErQjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1Q7Z0JBQ0ksSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLEdBQUcsRUFBRSxDQUFDO2FBQ1QsRUFBRTtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsR0FBRyxFQUFFLENBQUM7YUFDVCxFQUFFO2dCQUNDLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxHQUFHLEVBQUUsQ0FBQzthQUNUO1NBQ0osQ0FBQztRQUVGLElBQUksQ0FB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QyxhQUFhLENBcUd6QjtJQUFELG9CQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFyR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgTG9jYXRpb25EZXRhaWwgfSBmcm9tIFwiLi4vc2hhcmVkL2xvY2F0aW9uL2RldGFpbFwiXG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IExvY2F0ZUFkZHJlc3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2F0ZS1hZGRyZXNzXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuLi9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9jb25maWcnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvbG9jYXRpb24vbG9jYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgLy9jaGFuZ2UgdGVtcGxhdGVVcmwgdG8gY29tcG9uZW50X3Rlc3QgdG8gdmlldyB0ZXN0IHBhZ2UgaW4gZW11bGF0b3JcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnLCAnaG9tZS1jb21tb24uY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY291bnR5TGF0cztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGRldGFpbHM6IExvY2F0aW9uRGV0YWlsO1xuICAgIGRpc3RhbmNlO1xuICAgIG5hbWU7XG4gICAgY2FyZHM7XG4gICAgYWRkcmVzcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbnNTZXJ2aWNlOiBMb2NhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAvLyAgICAgIHByaXZhdGUgY2Vuc3VzU2VydmljZTogQ2Vuc3VzU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG15RGlzdCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZSh4LCB5KTtcbiAgICB9XG5cbiAgICBnb1RvVXJsKHVybCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnJylcbiAgICAgICAgSXRlbXNDb21wb25lbnQuc2V0U2VsZWN0ZWRJbmRleCh1cmwpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBMb2FkaW5nIGltYWdlIHRvIHNob3cgd2hpbGUgZGV0ZWN0aW5nIGxvY2F0aW9uXG4gICAgICAgIHRoaXMuaW1hZ2UgPSAncmVzOi8vbG9hZGluZ3NjcmVlbic7IC8vIFRPRE86IGNoYW5nZSBtZVxuXG4gICAgICAgIC8vIENhcmRzIHRvIHNob3cgb24gaG9tZSBzY3JlZW5cbiAgICAgICAgdGhpcy5jYXJkcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTG9jYXRpb25zJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3JlczovL2ljb25fbG9jYXRpb25faG9tZScsXG4gICAgICAgICAgICAgICAgdXJsOiA0XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlcnZpY2VzJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3JlczovL2ljb25fc2VydmljZV9ob21lJyxcbiAgICAgICAgICAgICAgICB1cmw6IDVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHJvdmlkZXJzJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3JlczovL2ljb25fcHJvdmlkZXJfaG9tZScsXG4gICAgICAgICAgICAgICAgdXJsOiA2XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKCFpc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm9uYmxvY2tpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9jYXRpb25zU2VydmljZS5nZXRBbGxMb2NhdGlvbnMoKS50aGVuKChjb3VudHlMYXRzKSA9PiB7XG4gICAgICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMywgdXBkYXRlRGlzdGFuY2U6IDEwLCB0aW1lb3V0OiAzMDAwMFxuICAgICAgICAgICAgfSkudGhlbigobG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWV0ZXJzVG9NaWxlcyA9IDAuMDAwNjIxMzcxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWluRGlzdCA9IDgwMDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW5Db3VudHk6IExvY2F0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvdW50eUxhdHMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZmVhdHVyZS5nZXRHZW8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5teURpc3QobG9jYXRpb24sIGxvYykgKiBtZXRlcnNUb01pbGVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbkRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Db3VudHkgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbWluQ291bnR5LmdldE5hbWUoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBtaW5Db3VudHkuZ2V0QWRkcmVzcygpLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gbWluRGlzdC50b0ZpeGVkKDEpICsgJyBtaSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBtaW5Db3VudHkuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpbWFnZSB0byBzaG93IHdoZW4gd2UgY2Fubm90IGRldGVybWluZSBsb2NhdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAncmVzOi8vaWNvbl9sb2NhdGlvbl9ob21lJzsgLy8gVE9ETzogY2hhbmdlIG1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIGxldCBsb2NhdG9yID0gbmV3IExvY2F0ZUFkZHJlc3MoKTtcblxuICAgICAgICBsb2NhdG9yLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWF2YWlsKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJtYXBzIG5vdCBhdmFpbGFibGVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYXRvci5sb2NhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MucmVwbGFjZSgnXFxuJywgJyUyQycpLnJlcGxhY2UoLyAvZywgJysnKS5yZXBsYWNlKCcsJywgJyUyQycpLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19