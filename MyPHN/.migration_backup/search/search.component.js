"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_service_1 = require("../shared/location/locations.service");
var router_1 = require("@angular/router");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_router, locationsService) {
        this._router = _router;
        this.locationsService = locationsService;
    }
    SearchComponent.prototype.search = function () {
        this._router.navigateByUrl('items/(search:search/' + this.searchTerm + ')');
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.searchTerm = '';
        this.webViewSrc = '';
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./search.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            locations_service_1.LocationsService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFFekUsMEVBQXdFO0FBRXhFLDBDQUF5RDtBQWlCekQ7SUFFSSx5QkFDWSxPQUFlLEVBQ2YsZ0JBQWtDO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRzlDLENBQUM7SUFLRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFuQlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FNdUIsZUFBTTtZQUNHLG9DQUFnQjtPQUpyQyxlQUFlLENBb0IzQjtJQUFELHNCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2Vuc3VzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2Vuc3VzL2NlbnN1cy5zZXJ2aWNlXCJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IExvY2F0aW9uRGV0YWlsIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhdGlvbi9kZXRhaWxcIlxuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBMb2NhdGVBZGRyZXNzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiO1xuXG5cblxuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb25zU2VydmljZTogTG9jYXRpb25zU2VydmljZSxcbiAgICApIHtcblxuICAgIH1cblxuICAgIHdlYlZpZXdTcmM7XG4gICAgc2VhcmNoVGVybTtcblxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ2l0ZW1zLyhzZWFyY2g6c2VhcmNoLycgKyB0aGlzLnNlYXJjaFRlcm0gKyAnKScpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSAnJztcbiAgICB9XG59XG4iXX0=