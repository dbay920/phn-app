"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_service_1 = require("../shared/location/locations.service");
var router_1 = require("@angular/router");
var segmented_bar_1 = require("ui/segmented-bar");
var _ = require("lodash");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(route, _router, locationsService) {
        this.route = route;
        this._router = _router;
        this.locationsService = locationsService;
    }
    LocationsComponent.prototype.listViewItemTap = function (i) {
        this.goToLocations(i);
    };
    LocationsComponent.prototype.goToLocations = function (i) {
        switch (this.selectedIndex) {
            case 0:
                this._router.navigateByUrl('items/(locations:locations/' +
                    this.counties[i].getName() + ')');
                break;
            case 1:
                this._router.navigateByUrl('items/(locations:locations/detail/' +
                    (this.sortedDistance[i].getId()) + ')');
                break;
            case 2:
                this._router.navigateByUrl('items/(locations:locations/detail/' +
                    (this.sortedAlphabetically[i].getId()) + ')');
                break;
            default:
                break;
        }
    };
    LocationsComponent.prototype.onSelectedIndexChange = function (event) {
        var segmetedBar = event.object;
        this.selectedIndex = segmetedBar.selectedIndex;
        switch (this.selectedIndex) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                break;
            default:
                break;
        }
    };
    LocationsComponent.prototype.myDist = function (x, y) {
        return nativescript_geolocation_1.distance(x, y);
    };
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            console.log('nonblocking');
        }
        this.locationsService.getAllLocations().then(function (countyLats) {
            nativescript_geolocation_1.getCurrentLocation({
                desiredAccuracy: 3, updateDistance: 10, timeout: 30000
            }).then(function (loc) {
                if (loc) {
                    _this.sortedDistance = _.sortBy(countyLats, function (feature) {
                        var location = feature.getGeo();
                        var dist = _this.myDist(location, loc);
                        var metersToMiles = 0.000621371;
                        // save distance
                        feature.push((dist * metersToMiles).toFixed(1) + ' mi');
                        return dist;
                    });
                    _this.sortedAlphabetically =
                        _.sortBy(_this.sortedDistance, function (location) {
                            return location.getName();
                        });
                }
            }, function (e) {
                console.log("Error: " + e.message);
            });
        });
        this.i = 0;
        this.myItems = [];
        for (var i = 1; i < 4; i++) {
            var item = new segmented_bar_1.SegmentedBarItem();
            this.myItems.push(item);
        }
        this.myItems[0].title = 'County';
        this.myItems[1].title = 'Distance';
        this.myItems[2].title = 'Alphabetical';
        this.locationsService.getCounties().then(function (x) {
            _this.counties = x;
        }, function (error) { return alert("Could not load location info." + error); });
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./locations.component.html",
            styleUrls: ["./locations.component.css", './locations-common.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, locations_service_1.LocationsService])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFFekUsMEVBQXdFO0FBRXhFLDBDQUF5RDtBQUV6RCxrREFBa0U7QUFFbEUsMEJBQTRCO0FBQzVCLHFFQUFxSTtBQVlySTtJQVVJLDRCQUFvQixLQUFxQixFQUFVLE9BQWUsRUFBVSxnQkFBa0M7UUFBMUYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUM5RyxDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLENBQUM7UUFDWCxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEIsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDZCQUE2QjtvQkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtnQkFFckMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxvQ0FBb0M7b0JBQzNELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG9DQUFvQztvQkFDM0QsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFH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LENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUVwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBR3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQkFBK0IsR0FBRyxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsQ0FDNUQsQ0FBQztJQUNOLENBQUM7SUFySFEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRSxDQUFDO3lDQVk2Qix1QkFBYyxFQUFtQixlQUFNLEVBQTRCLG9DQUFnQjtPQVZyRyxrQkFBa0IsQ0FzSDlCO0lBQUQseUJBQUM7Q0FBQSxBQXRIRCxJQXNIQztBQXRIWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ291bnR5IH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9jb3VudHlcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9jb25maWcnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvblwiO1xuaW1wb3J0IHsgTG9jYXRlQWRkcmVzcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYXRlLWFkZHJlc3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2NhdGlvbnMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9jYXRpb25zLmNvbXBvbmVudC5jc3NcIiwgJy4vbG9jYXRpb25zLWNvbW1vbi5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgY291bnRpZXM6IEFycmF5PENvdW50eT47XG4gICAgcHVibGljIG15SXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+O1xuICAgIHB1YmxpYyBpO1xuICAgIHZpc2liaWxpdHkxO1xuICAgIHZpc2liaWxpdHkzO1xuICAgIHZpc2liaWxpdHkyO1xuICAgIHNlbGVjdGVkSW5kZXg7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9jYXRpb25zU2VydmljZTogTG9jYXRpb25zU2VydmljZSkge1xuICAgIH1cblxuICAgIGxpc3RWaWV3SXRlbVRhcChpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub0xvY2F0aW9ucyhpKTtcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb25zKGkpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnaXRlbXMvKGxvY2F0aW9uczpsb2NhdGlvbnMvJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRpZXNbaV0uZ2V0TmFtZSgpICsgJyknKVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ2l0ZW1zLyhsb2NhdGlvbnM6bG9jYXRpb25zL2RldGFpbC8nICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc29ydGVkRGlzdGFuY2VbaV0uZ2V0SWQoKSkgKyAnKScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpdGVtcy8obG9jYXRpb25zOmxvY2F0aW9ucy9kZXRhaWwvJyArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnNvcnRlZEFscGhhYmV0aWNhbGx5W2ldLmdldElkKCkpICsgJyknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlZ21ldGVkQmFyID0gPFNlZ21lbnRlZEJhcj5ldmVudC5vYmplY3Q7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydGVkQWxwaGFiZXRpY2FsbHk7XG4gICAgc29ydGVkRGlzdGFuY2U7XG5cbiAgICBteURpc3QoeCwgeSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UoeCwgeSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vbmJsb2NraW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvY2F0aW9uc1NlcnZpY2UuZ2V0QWxsTG9jYXRpb25zKCkudGhlbigoY291bnR5TGF0cykgPT4ge1xuICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgdGltZW91dDogMzAwMDBcbiAgICAgICAgICAgIH0pLnRoZW4oKGxvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ZWREaXN0YW5jZSA9IF8uc29ydEJ5KGNvdW50eUxhdHMsIChmZWF0dXJlOiBMb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZmVhdHVyZS5nZXRHZW8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5teURpc3QobG9jYXRpb24sIGxvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWV0ZXJzVG9NaWxlcyA9IDAuMDAwNjIxMzcxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIGRpc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnB1c2goKGRpc3QgKiBtZXRlcnNUb01pbGVzKS50b0ZpeGVkKDEpICsgJyBtaScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydGVkQWxwaGFiZXRpY2FsbHkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5zb3J0QnkodGhpcy5zb3J0ZWREaXN0YW5jZSwgKGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbi5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLm15SXRlbXMgPSBbXG5cbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuXG4gICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm15SXRlbXNbMF0udGl0bGUgPSAnQ291bnR5JztcbiAgICAgICAgdGhpcy5teUl0ZW1zWzFdLnRpdGxlID0gJ0Rpc3RhbmNlJztcbiAgICAgICAgdGhpcy5teUl0ZW1zWzJdLnRpdGxlID0gJ0FscGhhYmV0aWNhbCc7XG5cblxuICAgICAgICB0aGlzLmxvY2F0aW9uc1NlcnZpY2UuZ2V0Q291bnRpZXMoKS50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50aWVzID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJDb3VsZCBub3QgbG9hZCBsb2NhdGlvbiBpbmZvLlwiICsgZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19