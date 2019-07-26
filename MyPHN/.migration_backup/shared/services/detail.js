"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceDetail = /** @class */ (function () {
    function ServiceDetail() {
        this.data = [];
    }
    ServiceDetail.prototype.getHref = function () {
        return 'https://primary-health.net/' + this.data[0];
    };
    ServiceDetail.prototype.getName = function () {
        return this.data[2];
    };
    ServiceDetail.prototype.getPhone = function () {
        return this.data[2];
    };
    ServiceDetail.prototype.getAddress = function () {
        return this.about ? this.about[0] : null;
    };
    ServiceDetail.prototype.push = function (x) {
        if (x === "")
            return;
        if (x === "Hours") {
            this.about = this.data;
            this.data = [];
            return;
        }
        if (x === "Contact") {
            this.hours = this.data;
            this.data = [];
            return;
        }
        this.data.push(x);
    };
    ServiceDetail.prototype.setImage = function (x) {
        if (!this.image)
            this.image = x;
    };
    ServiceDetail.prototype.getImage = function () {
        return 'https://primary-health.net/' + this.image;
    };
    ServiceDetail.prototype.getHours = function () {
        return this.hours.slice(0, -1).join('\n');
    };
    ServiceDetail.prototype.getAbout = function () {
        return this.about[1];
    };
    ServiceDetail.prototype.getContact = function () {
        return this.data[0];
    };
    ServiceDetail.prototype.getProviders = function () {
        return {};
    };
    return ServiceDetail;
}());
exports.ServiceDetail = ServiceDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFNSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksT0FBTyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxDQUFTO1FBQ1YsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU87UUFDWCxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxDQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxPQUFPLDZCQUE2QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQztBQXBFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZXJ2aWNlRGV0YWlsIHtcbiAgICBkYXRhOiBBcnJheTxzdHJpbmc+O1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgaG91cnM6IEFycmF5PHN0cmluZz47XG4gICAgYWJvdXQ6IEFycmF5PHN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfVxuXG4gICAgZ2V0SHJlZigpIHtcbiAgICAgICAgcmV0dXJuICdodHRwczovL3ByaW1hcnktaGVhbHRoLm5ldC8nICsgdGhpcy5kYXRhWzBdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMl07XG4gICAgfVxuXG4gICAgZ2V0UGhvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMl07XG5cbiAgICB9XG5cbiAgICBnZXRBZGRyZXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmFib3V0ID8gdGhpcy5hYm91dFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaCh4OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHggPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh4ID09PSBcIkhvdXJzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaG91cnMgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHgpO1xuICAgIH1cblxuICAgIHNldEltYWdlKHg6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuaW1hZ2UpXG4gICAgICAgICAgICB0aGlzLmltYWdlID0geDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuICdodHRwczovL3ByaW1hcnktaGVhbHRoLm5ldC8nICsgdGhpcy5pbWFnZTtcbiAgICB9XG5cbiAgICBnZXRIb3VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMuc2xpY2UoMCwgLTEpLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIGdldEFib3V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmFib3V0WzFdO1xuICAgIH1cblxuICAgIGdldENvbnRhY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XG4gICAgfVxuXG4gICAgZ2V0UHJvdmlkZXJzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuIl19