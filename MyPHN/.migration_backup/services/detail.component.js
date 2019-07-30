"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var locations_service_1 = require("../shared/location/locations.service");
var TNSPhone = require("nativescript-phone");
var ServiceDetailComponent = /** @class */ (function () {
    function ServiceDetailComponent(route, _router, locationsService, _ngZone) {
        this.route = route;
        this._router = _router;
        this.locationsService = locationsService;
        this._ngZone = _ngZone;
    }
    ServiceDetailComponent.prototype.back = function () {
        this._router.navigateByUrl('/items');
    };
    ServiceDetailComponent.prototype.isLocation = function (href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    };
    ServiceDetailComponent.prototype.isProvider = function (href) {
        return href.indexOf('DoctorBio.aspx?id=') >= 0;
    };
    ServiceDetailComponent.prototype.ngAfterViewInit = function () {
    };
    ServiceDetailComponent.prototype.providersTap = function () {
    };
    ServiceDetailComponent.prototype.gotoProvider = function (i) {
        this._router.navigateByUrl("items/(providers:providers/" + this.providers[i].getId());
    };
    ServiceDetailComponent.prototype.callHome = function (x) {
        TNSPhone.dial(x.getContact(), true);
    };
    ServiceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params["id"].split('#')[0];
        });
        this.locationsService.getServiceProviders(this.id).then(function (y) {
            _this.providers = y;
        });
    };
    ServiceDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./detail.component.html",
            styleUrls: ["./detail.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            locations_service_1.LocationsService,
            core_1.NgZone])
    ], ServiceDetailComponent);
    return ServiceDetailComponent;
}());
exports.ServiceDetailComponent = ServiceDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEc7QUFDOUcsMENBQXlEO0FBR3pELDBFQUF3RTtBQUV4RSw2Q0FBK0M7QUFTL0M7SUFHSSxnQ0FDWSxLQUFxQixFQUNyQixPQUFlLEVBQ2YsZ0JBQWtDLEVBQ2xDLE9BQWU7UUFIZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3ZCLENBQUM7SUFFTCxxQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDJDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCw2Q0FBWSxHQUFaO0lBRUEsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSx5Q0FBUSxHQUFmLFVBQWdCLENBQUM7UUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSUQseUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUM3QixLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbkQsVUFBQyxDQUFrQjtZQUNmLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWpEUSxzQkFBc0I7UUFQbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBTXFCLHVCQUFjO1lBQ1osZUFBTTtZQUNHLG9DQUFnQjtZQUN6QixhQUFNO09BUGxCLHNCQUFzQixDQWtEbEM7SUFBRCw2QkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSwgUXVlcnlMaXN0LCBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYXRpb24vbG9jYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3Byb3ZpZGVycy9wcm92aWRlclwiXG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb25zU2VydmljZTogTG9jYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgKSB7IH1cblxuICAgIGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvaXRlbXMnKTtcbiAgICB9XG5cbiAgICBpc0xvY2F0aW9uKGhyZWYpIHtcbiAgICAgICAgcmV0dXJuIGhyZWYuaW5kZXhPZignTG9jYXRpb25EZXRhaWwuYXNweD9pZD0nKSA+PSAwO1xuICAgIH1cblxuICAgIGlzUHJvdmlkZXIoaHJlZikge1xuICAgICAgICByZXR1cm4gaHJlZi5pbmRleE9mKCdEb2N0b3JCaW8uYXNweD9pZD0nKSA+PSAwO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIH1cblxuICAgIHByb3ZpZGVyc1RhcCgpIHtcblxuICAgIH1cblxuICAgIGdvdG9Qcm92aWRlcihpKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiaXRlbXMvKHByb3ZpZGVyczpwcm92aWRlcnMvXCIgKyB0aGlzLnByb3ZpZGVyc1tpXS5nZXRJZCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEhvbWUoeCkge1xuICAgICAgICBUTlNQaG9uZS5kaWFsKHguZ2V0Q29udGFjdCgpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwcm92aWRlcnNWaXNpYmxlO1xuICAgIHByb3ZpZGVycztcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl0uc3BsaXQoJyMnKVswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2NhdGlvbnNTZXJ2aWNlLmdldFNlcnZpY2VQcm92aWRlcnModGhpcy5pZCkudGhlbihcbiAgICAgICAgICAgICh5OiBBcnJheTxQcm92aWRlcj4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVycyA9IHk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=