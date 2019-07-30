"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var web_view_1 = require("ui/web-view");
var platform_1 = require("platform");
var items_component_1 = require("../items.component");
var SearchTermComponent = /** @class */ (function () {
    function SearchTermComponent(_router, route) {
        this._router = _router;
        this.route = route;
    }
    SearchTermComponent.prototype.isLocation = function (href) {
        return href.indexOf('LocationDetail.aspx?id=') >= 0;
    };
    SearchTermComponent.prototype.isProvider = function (href) {
        return href.indexOf('DoctorBio.aspx?id=') >= 0;
    };
    SearchTermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.searchTerm = params["term"];
        });
        this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
            + this.searchTerm;
    };
    SearchTermComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ref.first.nativeElement.on(web_view_1.WebView.loadStartedEvent, function (event) {
            if (_this.isLocation(event.url) || _this.isProvider(event.url)) {
                // Stop the loading event
                if (!platform_1.isAndroid) {
                    event.object.ios.stopLoading();
                }
                else {
                    event.object.android.stopLoading();
                }
                // Do something depending on the coordinates in the URL
                if (_this.isLocation(event.url)) {
                    // is location
                    _this._router.navigateByUrl("items/(locations:locations/detail/" +
                        event.url.split('=')[1] + ')');
                    items_component_1.ItemsComponent.setSelectedIndex(4);
                }
                else {
                    // is provider
                    _this._router.navigateByUrl("items/(providers:providers/" +
                        event.url.split('=')[1] + ')');
                    items_component_1.ItemsComponent.setSelectedIndex(6);
                }
            }
        });
    };
    __decorate([
        core_1.ViewChildren('ref'),
        __metadata("design:type", core_1.QueryList)
    ], SearchTermComponent.prototype, "ref", void 0);
    SearchTermComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./term.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute])
    ], SearchTermComponent);
    return SearchTermComponent;
}());
exports.SearchTermComponent = SearchTermComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwwQ0FBeUQ7QUFDekQsd0NBQXFDO0FBQ3JDLHFDQUE0RDtBQUM1RCxzREFBb0Q7QUFRcEQ7SUFvREksNkJBQ1ksT0FBZSxFQUNmLEtBQXFCO1FBRHJCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBbERMLHdDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsMkNBQTJDO2NBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUIsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBSztZQUM1RCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUUxRCx5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxvQkFBUyxFQUFFO29CQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDdEM7Z0JBRUQsdURBQXVEO2dCQUN2RCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUU1QixjQUFjO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUN0QixvQ0FBb0M7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNuQyxnQ0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QztxQkFBTTtvQkFFSCxjQUFjO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUN0Qiw2QkFBNkI7d0JBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNuQyxnQ0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0NvQjtRQUFwQixtQkFBWSxDQUFDLEtBQUssQ0FBQztrQ0FBTSxnQkFBUztvREFBTTtJQUhoQyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBdUR1QixlQUFNO1lBQ1IsdUJBQWM7T0F0RHhCLG1CQUFtQixDQXdEL0I7SUFBRCwwQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5TGlzdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tIFwidWkvd2ViLXZpZXdcIlxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGVybS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFRlcm1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICAgIHB1YmxpYyB3ZWJWaWV3U3JjO1xuICAgIHB1YmxpYyBzZWFyY2hUZXJtO1xuICAgIEBWaWV3Q2hpbGRyZW4oJ3JlZicpIHJlZjogUXVlcnlMaXN0PGFueT47XG5cbiAgICBpc0xvY2F0aW9uKGhyZWYpIHtcbiAgICAgICAgcmV0dXJuIGhyZWYuaW5kZXhPZignTG9jYXRpb25EZXRhaWwuYXNweD9pZD0nKSA+PSAwO1xuICAgIH1cblxuICAgIGlzUHJvdmlkZXIoaHJlZikge1xuICAgICAgICByZXR1cm4gaHJlZi5pbmRleE9mKCdEb2N0b3JCaW8uYXNweD9pZD0nKSA+PSAwO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHBhcmFtc1tcInRlcm1cIl07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSAnaHR0cHM6Ly9wcmltYXJ5LWhlYWx0aC5uZXQvU2VhcmNoLmFzcHg/cT0nXG4gICAgICAgICAgICArIHRoaXMuc2VhcmNoVGVybTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVmLmZpcnN0Lm5hdGl2ZUVsZW1lbnQub24oV2ViVmlldy5sb2FkU3RhcnRlZEV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9jYXRpb24oZXZlbnQudXJsKSB8fCB0aGlzLmlzUHJvdmlkZXIoZXZlbnQudXJsKSkge1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgbG9hZGluZyBldmVudFxuICAgICAgICAgICAgICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9iamVjdC5pb3Muc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5vYmplY3QuYW5kcm9pZC5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyBkZXBlbmRpbmcgb24gdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBVUkxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvY2F0aW9uKGV2ZW50LnVybCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXMvKGxvY2F0aW9uczpsb2NhdGlvbnMvZGV0YWlsL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnVybC5zcGxpdCgnPScpWzFdICsgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgSXRlbXNDb21wb25lbnQuc2V0U2VsZWN0ZWRJbmRleCg0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIHByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtcy8ocHJvdmlkZXJzOnByb3ZpZGVycy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC51cmwuc3BsaXQoJz0nKVsxXSArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW1zQ29tcG9uZW50LnNldFNlbGVjdGVkSW5kZXgoNik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cbn1cbiJdfQ==