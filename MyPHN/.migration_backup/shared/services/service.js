"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service(name) {
        this.data = [name];
    }
    Service.prototype.getHref = function () {
        return this.data[0];
    };
    Service.prototype.getId = function () {
        return this.getHref().split('=')[1];
    };
    Service.prototype.getName = function () {
        return this.data[1];
    };
    Service.prototype.getPhone = function () {
        return this.data[2];
    };
    Service.prototype.getAddress = function () {
        return this.data[3];
    };
    Service.prototype.push = function (x) {
        this.data.push(x);
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUdJLGlCQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx5QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFDRCw0QkFBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssQ0FBUztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBkYXRhOiBBcnJheTxzdHJpbmc+XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW25hbWVdO1xuICAgIH1cblxuICAgIGdldEhyZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhyZWYoKS5zcGxpdCgnPScpWzFdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XG4gICAgfVxuXG4gICAgZ2V0UGhvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMl07XG5cbiAgICB9XG4gICAgZ2V0QWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVszXTtcbiAgICB9XG5cbiAgICBwdXNoKHg6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh4KTtcbiAgICB9XG59XG4iXX0=