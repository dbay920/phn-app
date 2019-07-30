"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fetchModule = require("fetch");
var CensusService = /** @class */ (function () {
    function CensusService() {
    }
    CensusService.prototype.getLocation = function (address) {
        var encoded = address.replace(/ /g, '+').replace(/,/g, '%2C');
        var href = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=' + encoded +
            // 4600+Silver+Hill+Rd%2C+Suitland%2C+MD+20746
            '&benchmark=9&format=json';
        return fetchModule.fetch(href, {
            method: "GET"
        })
            .then(this.handleErrors)
            .then(function (x) {
            //console.log(x.text());
            var json = x.json();
            return json;
        }).then(function (raw) {
            var json = raw;
            var cond = (json.result &&
                json.result.addressMatches &&
                json.result.addressMatches.length > 0);
            var result = cond ? {
                latitude: json.result.addressMatches[0].coordinates.y,
                longitude: json.result.addressMatches[0].coordinates.x
            } : {};
            return result;
        });
    };
    CensusService.prototype.handleErrors = function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };
    CensusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CensusService);
    return CensusService;
}());
exports.CensusService = CensusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Vuc3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZW5zdXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHbkM7SUFDSTtJQUFnQixDQUFDO0lBRWpCLG1DQUFXLEdBQVgsVUFBWSxPQUFlO1FBQ3ZCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxJQUFJLEdBQUcsNkVBQTZFLEdBQUcsT0FBTztZQUM5Riw4Q0FBOEM7WUFDOUMsMEJBQTBCLENBQUM7UUFHL0IsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFDekI7WUFDSSxNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNKLHdCQUF3QjtZQUN4QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzFDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pELENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVQLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQXhDUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJmZXRjaFwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENlbnN1c1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRMb2NhdGlvbihhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGVuY29kZWQgPSBhZGRyZXNzLnJlcGxhY2UoLyAvZywgJysnKS5yZXBsYWNlKC8sL2csICclMkMnKTtcblxuICAgICAgICBsZXQgaHJlZiA9ICdodHRwczovL2dlb2NvZGluZy5nZW8uY2Vuc3VzLmdvdi9nZW9jb2Rlci9sb2NhdGlvbnMvb25lbGluZWFkZHJlc3M/YWRkcmVzcz0nICsgZW5jb2RlZCArXG4gICAgICAgICAgICAvLyA0NjAwK1NpbHZlcitIaWxsK1JkJTJDK1N1aXRsYW5kJTJDK01EKzIwNzQ2XG4gICAgICAgICAgICAnJmJlbmNobWFyaz05JmZvcm1hdD1qc29uJztcblxuXG4gICAgICAgIHJldHVybiBmZXRjaE1vZHVsZS5mZXRjaChocmVmLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgLnRoZW4oKHgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHgudGV4dCgpKTtcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHguanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuXG4gICAgICAgICAgICB9KS50aGVuKHJhdyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSByYXc7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmQgPSAoanNvbi5yZXN1bHQgJiZcbiAgICAgICAgICAgICAgICAgICAganNvbi5yZXN1bHQuYWRkcmVzc01hdGNoZXMgJiZcbiAgICAgICAgICAgICAgICAgICAganNvbi5yZXN1bHQuYWRkcmVzc01hdGNoZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY29uZCA/IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGpzb24ucmVzdWx0LmFkZHJlc3NNYXRjaGVzWzBdLmNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZToganNvbi5yZXN1bHQuYWRkcmVzc01hdGNoZXNbMF0uY29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgICAgIH0gOiB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuIl19