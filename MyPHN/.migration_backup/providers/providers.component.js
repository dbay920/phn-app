"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_service_1 = require("../shared/services/services.service");
var router_1 = require("@angular/router");
var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(_router, servicesService) {
        this._router = _router;
        this.servicesService = servicesService;
    }
    ProvidersComponent.prototype.goToService = function (i) {
        this._router.navigateByUrl("items/(providers:providers/services/" +
            this.services[i].getId() + '%23tab-2)');
        //        ItemsComponent.setSelectedIndex(5);
    };
    ProvidersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicesService.getServices().then(function (x) {
            _this.services = x;
        });
    };
    ProvidersComponent.prototype.listViewItemTap = function (i) {
        this.goToService(i);
    };
    ProvidersComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./providers.component.html",
            styleUrls: ['./providers.css', './providers-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_service_1.ServicesService])
    ], ProvidersComponent);
    return ProvidersComponent;
}());
exports.ProvidersComponent = ProvidersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpZGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsd0VBQXNFO0FBRXRFLDBDQUF5RDtBQVV6RDtJQUdJLDRCQUNZLE9BQWUsRUFDZixlQUFnQztRQURoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRTVDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHNDQUFzQztZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQzNDLDZDQUE2QztJQUNqRCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQXZCUSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLHdCQUF3QixDQUFDO1NBQzNELENBQUM7eUNBTXVCLGVBQU07WUFDRSxrQ0FBZTtPQUxuQyxrQkFBa0IsQ0F3QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvc2VydmljZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvc2VydmljZVwiXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvdmlkZXJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvdmlkZXJzLmNzcycsICcuL3Byb3ZpZGVycy1jb21tb24uY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlc1NlcnZpY2U6IFNlcnZpY2VzU2VydmljZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBnb1RvU2VydmljZShpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiaXRlbXMvKHByb3ZpZGVyczpwcm92aWRlcnMvc2VydmljZXMvXCIgK1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc1tpXS5nZXRJZCgpICsgJyUyM3RhYi0yKScpXG4gICAgICAgIC8vICAgICAgICBJdGVtc0NvbXBvbmVudC5zZXRTZWxlY3RlZEluZGV4KDUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2VzU2VydmljZS5nZXRTZXJ2aWNlcygpLnRoZW4oKHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXMgPSB4O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaXN0Vmlld0l0ZW1UYXAoaSkge1xuICAgICAgICB0aGlzLmdvVG9TZXJ2aWNlKGkpXG4gICAgfVxufVxuIl19