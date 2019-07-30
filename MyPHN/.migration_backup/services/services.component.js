"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_service_1 = require("../shared/services/services.service");
var router_1 = require("@angular/router");
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(_router, servicesService) {
        this._router = _router;
        this.servicesService = servicesService;
    }
    ServicesComponent_1 = ServicesComponent;
    ServicesComponent.prototype.goToService = function (i) {
        this._router.navigateByUrl("items/(services:services/" +
            ServicesComponent_1.services[i].getId() + ')');
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicesService.getServices().then(function (x) {
            ServicesComponent_1.services = x;
            _this.services = x;
        });
    };
    ServicesComponent.prototype.listViewItemTap = function (i) {
        this.goToService(i);
    };
    var ServicesComponent_1;
    ServicesComponent = ServicesComponent_1 = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./services.component.html",
            styleUrls: ['./services.css', './services-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_service_1.ServicesService])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHdFQUFzRTtBQUV0RSwwQ0FBeUQ7QUFTekQ7SUFJSSwyQkFDWSxPQUFlLEVBQ2YsZUFBZ0M7UUFEaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN4QyxDQUFDOzBCQVBJLGlCQUFpQjtJQVMxQix1Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDJCQUEyQjtZQUNsRCxtQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUN0QyxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7SUF2QlEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQztTQUN6RCxDQUFDO3lDQU91QixlQUFNO1lBQ0Usa0NBQWU7T0FObkMsaUJBQWlCLENBd0I3QjtJQUFELHdCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZXJ2aWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2VzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2VcIlxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlcnZpY2VzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VydmljZXMuY3NzJywgJy4vc2VydmljZXMtY29tbW9uLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2VydmljZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXRpYyBzZXJ2aWNlczogQXJyYXk8U2VydmljZT47XG4gICAgc2VydmljZXM6IEFycmF5PFNlcnZpY2U+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VzU2VydmljZTogU2VydmljZXNTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBnb1RvU2VydmljZShpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiaXRlbXMvKHNlcnZpY2VzOnNlcnZpY2VzL1wiICtcbiAgICAgICAgICAgIFNlcnZpY2VzQ29tcG9uZW50LnNlcnZpY2VzW2ldLmdldElkKCkgKyAnKScpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZXNTZXJ2aWNlLmdldFNlcnZpY2VzKCkudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgU2VydmljZXNDb21wb25lbnQuc2VydmljZXMgPSB4O1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpc3RWaWV3SXRlbVRhcChpKSB7XG4gICAgICAgIHRoaXMuZ29Ub1NlcnZpY2UoaSlcbiAgICB9XG59XG4iXX0=