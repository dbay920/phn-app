"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var items_component_1 = require("../items.component");
var NewsComponent = /** @class */ (function () {
    function NewsComponent(_router) {
        this._router = _router;
    }
    NewsComponent.prototype.goToService = function (i) {
        this._router.navigateByUrl("items/(services:services/"
            + this.services[i].getId() + ')');
        items_component_1.ItemsComponent.setSelectedIndex(5);
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.webViewSrc = 'https://primary-health.net/blog/';
    };
    NewsComponent.prototype.listViewItemTap = function (i) {
        this.goToService(i);
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./news.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwQ0FBeUQ7QUFDekQsc0RBQW9EO0FBUXBEO0lBSUksdUJBQ1ksT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFM0IsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCO2NBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDckMsZ0NBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsa0NBQWtDLENBQUM7SUFDekQsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQXJCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQU91QixlQUFNO09BTGxCLGFBQWEsQ0FzQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvc2VydmljZVwiXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3cy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlcnZpY2VzOiBBcnJheTxTZXJ2aWNlPjtcbiAgICB3ZWJWaWV3U3JjOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ29Ub1NlcnZpY2UoaSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIml0ZW1zLyhzZXJ2aWNlczpzZXJ2aWNlcy9cIlxuICAgICAgICAgICAgKyB0aGlzLnNlcnZpY2VzW2ldLmdldElkKCkgKyAnKScpXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LnNldFNlbGVjdGVkSW5kZXgoNSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2ViVmlld1NyYyA9ICdodHRwczovL3ByaW1hcnktaGVhbHRoLm5ldC9ibG9nLyc7XG4gICAgfVxuXG4gICAgbGlzdFZpZXdJdGVtVGFwKGkpIHtcbiAgICAgICAgdGhpcy5nb1RvU2VydmljZShpKVxuICAgIH1cbn1cbiJdfQ==