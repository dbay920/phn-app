"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var providers_service_1 = require("../shared/providers/providers.service");
var router_1 = require("@angular/router");
var items_component_1 = require("../items.component");
var TNSPhone = require("nativescript-phone");
var nativescript_locate_address_1 = require("nativescript-locate-address");
var ProviderDetailComponent = /** @class */ (function () {
    function ProviderDetailComponent(route, _router, providersService, _ngZone) {
        this.route = route;
        this._router = _router;
        this.providersService = providersService;
        this._ngZone = _ngZone;
    }
    ProviderDetailComponent.prototype.back = function () {
        this._router.navigateByUrl('/items');
    };
    ProviderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params["id"];
        });
        this.providersService.getDetails(this.id).then(function (x) {
            _this.provider = x;
            _this.name = _this.provider.getName();
            _this.desc = _this.provider.getDescription();
            _this.locations = _this.provider.getLocations();
            _this.image = _this.provider.getImage();
            _this.area = _this.provider.getServiceName();
            _this._ngZone.run(function () {
                // weird fix for arriving from webview
            });
        }, function (error) { return alert("Could not load locations."); });
    };
    ProviderDetailComponent.prototype.goToLocation = function (i) {
        this._router.navigateByUrl("items/(locations:locations/detail/" + i + ')');
        items_component_1.ItemsComponent.setSelectedIndex(4);
    };
    ProviderDetailComponent.prototype.call = function (x) {
        TNSPhone.dial(x, true);
    };
    ProviderDetailComponent.prototype.navigate = function (x) {
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.available().then(function (avail) {
            if (!avail) {
                alert("maps not available");
            }
            else {
                locator.locate({
                    address: x.replace('\n', '%2C').replace(/ /g, '+').replace(',', '%2C'),
                }).then(function () {
                    console.log("Maps app launched.");
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    ProviderDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./detail.component.html",
            styleUrls: ["./detail.component.css", 'detail-common.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            providers_service_1.ProvidersService,
            core_1.NgZone])
    ], ProviderDetailComponent);
    return ProviderDetailComponent;
}());
exports.ProviderDetailComponent = ProviderDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsMkVBQXlFO0FBQ3pFLDBDQUF5RDtBQUV6RCxzREFBb0Q7QUFDcEQsNkNBQStDO0FBQy9DLDJFQUE0RDtBQVM1RDtJQVNJLGlDQUNZLEtBQXFCLEVBQ3JCLE9BQWUsRUFDZixnQkFBa0MsRUFDbEMsT0FBZTtRQUhmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFM0IsQ0FBQztJQUVELHNDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzdCLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUViLHNDQUFzQztZQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFDRyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUFsQyxDQUFrQyxDQUNoRCxDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0NBQW9DLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNFLGdDQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ04sSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7UUFFbEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDUixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTthQUM5QjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO2lCQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQzthQUNOO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBcEVRLHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsbUJBQW1CLENBQUM7U0FDN0QsQ0FBQzt5Q0FZcUIsdUJBQWM7WUFDWixlQUFNO1lBQ0csb0NBQWdCO1lBQ3pCLGFBQU07T0FibEIsdUJBQXVCLENBcUVuQztJQUFELDhCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3Byb3ZpZGVycy9wcm92aWRlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4uL3NoYXJlZC9wcm92aWRlcnMvcHJvdmlkZXInXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuaW1wb3J0IHsgTG9jYXRlQWRkcmVzcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYXRlLWFkZHJlc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2RldGFpbC5jb21wb25lbnQuY3NzXCIsICdkZXRhaWwtY29tbW9uLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcHJvdmlkZXI6IFByb3ZpZGVyO1xuICAgIG5hbWU7XG4gICAgZGVzYztcbiAgICBsb2NhdGlvbnM7XG4gICAgaW1hZ2U7XG4gICAgYXJlYTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcHJvdmlkZXJzU2VydmljZTogUHJvdmlkZXJzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2l0ZW1zJyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1tcImlkXCJdO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3ZpZGVyc1NlcnZpY2UuZ2V0RGV0YWlscyh0aGlzLmlkKS50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyID0geDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMucHJvdmlkZXIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gdGhpcy5wcm92aWRlci5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSB0aGlzLnByb3ZpZGVyLmdldExvY2F0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMucHJvdmlkZXIuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IHRoaXMucHJvdmlkZXIuZ2V0U2VydmljZU5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgZml4IGZvciBhcnJpdmluZyBmcm9tIHdlYnZpZXdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiQ291bGQgbm90IGxvYWQgbG9jYXRpb25zLlwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbihpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiaXRlbXMvKGxvY2F0aW9uczpsb2NhdGlvbnMvZGV0YWlsL1wiICsgaSArICcpJyk7XG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LnNldFNlbGVjdGVkSW5kZXgoNCk7XG4gICAgfVxuXG4gICAgY2FsbCh4KTogdm9pZCB7XG4gICAgICAgIFROU1Bob25lLmRpYWwoeCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoeCkge1xuICAgICAgICBsZXQgbG9jYXRvciA9IG5ldyBMb2NhdGVBZGRyZXNzKCk7XG5cbiAgICAgICAgbG9jYXRvci5hdmFpbGFibGUoKS50aGVuKChhdmFpbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFhdmFpbCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwibWFwcyBub3QgYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2F0b3IubG9jYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogeC5yZXBsYWNlKCdcXG4nLCAnJTJDJykucmVwbGFjZSgvIC9nLCAnKycpLnJlcGxhY2UoJywnLCAnJTJDJyksXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19