"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var locations_service_1 = require("./shared/location/locations.service");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var utils_1 = require("utils/utils");
var nativescript_screen_orientation_1 = require("nativescript-screen-orientation");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(_router, locationsService, routerExtensions, page) {
        this._router = _router;
        this.locationsService = locationsService;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.canGoBack = null;
        page.on("navigatedTo", function () {
            nativescript_screen_orientation_1.setCurrentOrientation("portrait", function () {
                console.log("portrait orientation");
            });
        });
        page.on("navigatingFrom", function () {
            nativescript_screen_orientation_1.orientationCleanup();
        });
    }
    ItemsComponent_1 = ItemsComponent;
    ItemsComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ItemsComponent.getSelectedIndex = function () {
        if (!ItemsComponent_1.tabView)
            return -1;
        if (platform_1.isIOS)
            return ItemsComponent_1.tabView.ios.selectedIndex;
        return ItemsComponent_1.tabView.selectedIndex;
    };
    ItemsComponent.setSelectedIndex = function (i) {
        ItemsComponent_1.tabView.selectedIndex = i;
        ItemsComponent_1.showActionBar();
    };
    ItemsComponent.showActionBar = function () {
        if (!ItemsComponent_1.tabView) {
            return;
        }
        var page = ItemsComponent_1.tabView.page;
        if (ItemsComponent_1.navCtrl)
            ItemsComponent_1.navCtrl.navigationBarHidden = true;
        page.actionBarHidden = false;
    };
    ItemsComponent.isMoreTab = function () {
        var index = ItemsComponent_1.getSelectedIndex();
        return platform_1.isAndroid ? false : index === 9223372036854776000;
    };
    // hook for tab change
    ItemsComponent.prototype.onSelectedIndexChanged = function (event) {
        // hook for tab change
        if (ItemsComponent_1.getSelectedIndex() === 0)
            this._router.navigateByUrl('/items');
        ItemsComponent_1.showActionBar();
    };
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // handles the hiding of the back button when it is useless
        this._router.events.subscribe(function (val) {
            var switchHash = {
                locations: 4,
                services: 5,
                providers: 6,
                portal: 1,
                news: 2,
                search: 3
            };
            var part = val['url'];
            if (part) {
                part = part.split('(')[1];
                if (part) {
                    part = part.split(':')[0];
                    part = switchHash[part];
                    if (part)
                        ItemsComponent_1.setSelectedIndex(part);
                }
            }
            _this.canGoBack = _this.routerExtensions.canGoBack();
        });
    };
    ItemsComponent.prototype.onLoaded = function (event) {
        if (platform_1.isAndroid) {
            var tabView = event.object._tabLayout.getChildAt(0);
            for (var i = 0; i < tabView.getChildCount(); i++) {
                var tabItem = tabView.getChildAt(i), textView = tabItem.getChildAt(1);
                tabItem.setLayoutParams(new android.widget.LinearLayout
                    .LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
                textView.setMaxWidth(utils_1.layout.toDevicePixels(800)); // increase as much you want
                textView.setMaxLines(1);
            }
        }
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        // protect from location interruption
        if (this.ref.first) {
            ItemsComponent_1.tabView = this.ref.first.nativeElement;
        }
        if (platform_1.isIOS) {
            ItemsComponent_1.navCtrl =
                ItemsComponent_1.tabView.ios.moreNavigationController;
        }
    };
    ItemsComponent.prototype.search = function () {
        this._router.navigateByUrl('/items');
        ItemsComponent_1.setSelectedIndex(3);
    };
    var ItemsComponent_1;
    __decorate([
        core_1.ViewChildren('ref'),
        __metadata("design:type", core_1.QueryList)
    ], ItemsComponent.prototype, "ref", void 0);
    __decorate([
        core_1.ViewChildren('action'),
        __metadata("design:type", core_1.QueryList)
    ], ItemsComponent.prototype, "action", void 0);
    ItemsComponent = ItemsComponent_1 = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ['items.component.css', 'items-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            locations_service_1.LocationsService,
            nativescript_angular_1.RouterExtensions,
            page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLDBDQUEwRDtBQUUxRCx5RUFBdUU7QUFFdkUsNkRBQXlFO0FBSXpFLGdDQUE4QjtBQUM5QixxQ0FBNEQ7QUFFNUQscUNBQW9DO0FBRXBDLG1GQUE0RjtBQVc1RjtJQVFJLHdCQUNZLE9BQWUsRUFDZixnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLElBQVU7UUFIVixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUEwRHRCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUF4RGIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDbkIsdURBQXFCLENBQUMsVUFBVSxFQUFFO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDdEIsb0RBQWtCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7dUJBdEJRLGNBQWM7SUF3QmhCLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVjLCtCQUFnQixHQUEvQjtRQUNJLElBQUksQ0FBQyxnQkFBYyxDQUFDLE9BQU87WUFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVkLElBQUksZ0JBQUs7WUFDTCxPQUFPLGdCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFcEQsT0FBTyxnQkFBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDaEQsQ0FBQztJQUVhLCtCQUFnQixHQUE5QixVQUErQixDQUFDO1FBQzVCLGdCQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDekMsZ0JBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRWEsNEJBQWEsR0FBM0I7UUFDSSxJQUFJLENBQUMsZ0JBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLEdBQVMsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTdDLElBQUksZ0JBQWMsQ0FBQyxPQUFPO1lBQ3RCLGdCQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRWMsd0JBQVMsR0FBeEI7UUFDSSxJQUFJLEtBQUssR0FBRyxnQkFBYyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFOUMsT0FBTyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxtQkFBbUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2YsK0NBQXNCLEdBQTdCLFVBQThCLEtBQUs7UUFFL0Isc0JBQXNCO1FBQ3RCLElBQUksZ0JBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsZ0JBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBSU0saUNBQVEsR0FBZjtRQUFBLGlCQTRCQztRQTFCRywyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUM5QixJQUFJLFVBQVUsR0FBRztnQkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDWixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsQ0FBQztnQkFDWixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsQ0FBQzthQUNaLENBQUE7WUFDRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRXpCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN6QixJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QixJQUFJLElBQUk7d0JBQ0osZ0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDNUM7YUFFSjtZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFnQjtRQUNyQixJQUFJLG9CQUFTLEVBQUU7WUFDWCxJQUFNLE9BQU8sR0FBUyxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDakMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxlQUFlLENBQ25CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZO3FCQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksRUFDOUQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUN4RCxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCO2dCQUM5RSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBR00sd0NBQWUsR0FBdEI7UUFFSSxxQ0FBcUM7UUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUNoQixnQkFBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FFekQ7UUFDRCxJQUFJLGdCQUFLLEVBQUU7WUFDUCxnQkFBYyxDQUFDLE9BQU87Z0JBQ2xCLGdCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsZ0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOztJQW5Jb0I7UUFBcEIsbUJBQVksQ0FBQyxLQUFLLENBQUM7a0NBQU0sZ0JBQVM7K0NBQU07SUFDakI7UUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7a0NBQVMsZ0JBQVM7a0RBQU07SUFOdEMsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLENBQUM7U0FDekQsQ0FBQzt5Q0FXdUIsZUFBTTtZQUNHLG9DQUFnQjtZQUNoQix1Q0FBZ0I7WUFDNUIsV0FBSTtPQVpiLGNBQWMsQ0F5STFCO0lBQUQscUJBQUM7Q0FBQSxBQXpJRCxJQXlJQztBQXpJWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2xvY2F0aW9uL2xvY2F0aW9ucy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IHNldEludGVydmFsLCBzZXRUaW1lb3V0LCBjbGVhckludGVydmFsIH0gZnJvbSBcInRpbWVyXCI7XG5pbXBvcnQgeyBUYWJWaWV3IH0gZnJvbSBcInVpL3RhYi12aWV3XCJcbmltcG9ydCB7IEFjdGlvbkJhciB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvY29uZmlnJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ1dGlscy91dGlsc1wiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50T3JpZW50YXRpb24sIG9yaWVudGF0aW9uQ2xlYW51cCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW4tb3JpZW50YXRpb24nO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydpdGVtcy5jb21wb25lbnQuY3NzJywgJ2l0ZW1zLWNvbW1vbi5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgU2lkZURyYXdlckxvY2F0aW9uOiBhbnk7XG4gICAgcHVibGljIHN0YXRpYyB0YWJWaWV3OiBUYWJWaWV3O1xuICAgIHB1YmxpYyBzdGF0aWMgYWN0aW9uQmFyOiBBY3Rpb25CYXI7XG5cbiAgICBAVmlld0NoaWxkcmVuKCdyZWYnKSByZWY6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBWaWV3Q2hpbGRyZW4oJ2FjdGlvbicpIGFjdGlvbjogUXVlcnlMaXN0PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb25zU2VydmljZTogTG9jYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICApIHtcbiAgICAgICAgcGFnZS5vbihcIm5hdmlnYXRlZFRvXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3J0cmFpdCBvcmllbnRhdGlvblwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFnZS5vbihcIm5hdmlnYXRpbmdGcm9tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3JpZW50YXRpb25DbGVhbnVwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICBpZiAoIUl0ZW1zQ29tcG9uZW50LnRhYlZpZXcpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG5cbiAgICAgICAgaWYgKGlzSU9TKVxuICAgICAgICAgICAgcmV0dXJuIEl0ZW1zQ29tcG9uZW50LnRhYlZpZXcuaW9zLnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIEl0ZW1zQ29tcG9uZW50LnRhYlZpZXcuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFNlbGVjdGVkSW5kZXgoaSkge1xuICAgICAgICBJdGVtc0NvbXBvbmVudC50YWJWaWV3LnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICBJdGVtc0NvbXBvbmVudC5zaG93QWN0aW9uQmFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzaG93QWN0aW9uQmFyKCkge1xuICAgICAgICBpZiAoIUl0ZW1zQ29tcG9uZW50LnRhYlZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWdlID0gPFBhZ2U+SXRlbXNDb21wb25lbnQudGFiVmlldy5wYWdlO1xuXG4gICAgICAgIGlmIChJdGVtc0NvbXBvbmVudC5uYXZDdHJsKVxuICAgICAgICAgICAgSXRlbXNDb21wb25lbnQubmF2Q3RybC5uYXZpZ2F0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpc01vcmVUYWIoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpbmRleCA9IEl0ZW1zQ29tcG9uZW50LmdldFNlbGVjdGVkSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gaXNBbmRyb2lkID8gZmFsc2UgOiBpbmRleCA9PT0gOTIyMzM3MjAzNjg1NDc3NjAwMDtcbiAgICB9XG5cbiAgICAvLyBob29rIGZvciB0YWIgY2hhbmdlXG4gICAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoZXZlbnQpOiB2b2lkIHtcblxuICAgICAgICAvLyBob29rIGZvciB0YWIgY2hhbmdlXG4gICAgICAgIGlmIChJdGVtc0NvbXBvbmVudC5nZXRTZWxlY3RlZEluZGV4KCkgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2l0ZW1zJyk7XG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LnNob3dBY3Rpb25CYXIoKTtcbiAgICB9XG5cbiAgICBjYW5Hb0JhY2sgPSBudWxsO1xuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIGhhbmRsZXMgdGhlIGhpZGluZyBvZiB0aGUgYmFjayBidXR0b24gd2hlbiBpdCBpcyB1c2VsZXNzXG4gICAgICAgIHRoaXMuX3JvdXRlci5ldmVudHMuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGxldCBzd2l0Y2hIYXNoID0ge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogNCxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlczogNSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IDYsXG4gICAgICAgICAgICAgICAgcG9ydGFsOiAxLFxuICAgICAgICAgICAgICAgIG5ld3M6IDIsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcGFydCA9IHZhbFsndXJsJ107XG5cbiAgICAgICAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3BsaXQoJygnKVsxXVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3BsaXQoJzonKVswXVxuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gc3dpdGNoSGFzaFtwYXJ0XVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW1zQ29tcG9uZW50LnNldFNlbGVjdGVkSW5kZXgocGFydClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FuR29CYWNrID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmNhbkdvQmFjaygpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTG9hZGVkKGV2ZW50OiBFdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgY29uc3QgdGFiVmlldyA9ICg8YW55PmV2ZW50Lm9iamVjdCkuX3RhYkxheW91dC5nZXRDaGlsZEF0KDApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJWaWV3LmdldENoaWxkQ291bnQoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiSXRlbSA9IHRhYlZpZXcuZ2V0Q2hpbGRBdChpKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFZpZXcgPSB0YWJJdGVtLmdldENoaWxkQXQoMSk7XG4gICAgICAgICAgICAgICAgdGFiSXRlbS5zZXRMYXlvdXRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5MYXlvdXRQYXJhbXMoYW5kcm9pZC52aWV3LlZpZXdHcm91cC5MYXlvdXRQYXJhbXMuV1JBUF9DT05URU5ULFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZC52aWV3LlZpZXdHcm91cC5MYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGV4dFZpZXcuc2V0TWF4V2lkdGgobGF5b3V0LnRvRGV2aWNlUGl4ZWxzKDgwMCkpOyAvLyBpbmNyZWFzZSBhcyBtdWNoIHlvdSB3YW50XG4gICAgICAgICAgICAgICAgdGV4dFZpZXcuc2V0TWF4TGluZXMoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbmF2Q3RybDtcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIC8vIHByb3RlY3QgZnJvbSBsb2NhdGlvbiBpbnRlcnJ1cHRpb25cbiAgICAgICAgaWYgKHRoaXMucmVmLmZpcnN0KSB7XG4gICAgICAgICAgICBJdGVtc0NvbXBvbmVudC50YWJWaWV3ID0gdGhpcy5yZWYuZmlyc3QubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgSXRlbXNDb21wb25lbnQubmF2Q3RybCA9XG4gICAgICAgICAgICAgICAgSXRlbXNDb21wb25lbnQudGFiVmlldy5pb3MubW9yZU5hdmlnYXRpb25Db250cm9sbGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9pdGVtcycpO1xuICAgICAgICBJdGVtc0NvbXBvbmVudC5zZXRTZWxlY3RlZEluZGV4KDMpO1xuICAgIH1cbn1cbiJdfQ==