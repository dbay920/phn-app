"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocationDetail = /** @class */ (function () {
    function LocationDetail() {
        this.data = [];
    }
    LocationDetail.prototype.setGeo = function (geo) {
        this.geo = geo;
    };
    LocationDetail.prototype.getGeo = function () {
        var geo = this.geo;
        var longitude = geo.match(/long(.*?),/)[1];
        var latitude = geo.match(/lat(.*?)[,<]/) ?
            geo.match(/lat(.*?)[,<]/)[1]
            : geo.split('lat')[1];
        var result = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        };
        return result;
    };
    LocationDetail.prototype.getHref = function () {
        return 'https://primary-health.net/' + this.data[0];
    };
    LocationDetail.prototype.getName = function () {
        return this.data[2];
    };
    LocationDetail.prototype.getPhone = function () {
        return this.data[2];
    };
    LocationDetail.prototype.getAddress = function () {
        return this.about ? this.about[0] : null;
    };
    LocationDetail.prototype.push = function (x) {
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
    LocationDetail.prototype.setImage = function (x) {
        if (!this.image)
            this.image = x;
    };
    LocationDetail.prototype.getImage = function () {
        return 'https://primary-health.net/' + this.image;
    };
    LocationDetail.prototype.getHours = function () {
        return this.hours.slice(0, -1).join('\n');
    };
    LocationDetail.prototype.getAbout = function () {
        return this.about[1];
    };
    LocationDetail.prototype.getContact = function () {
        return this.data[0];
    };
    LocationDetail.prototype.setProviders = function (x) {
        this.providers = x;
    };
    LocationDetail.prototype.getProviders = function () {
        return this.providers;
    };
    return LocationDetail;
}());
exports.LocationDetail = LocationDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFRSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sR0FBRztRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QixJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQzlCLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDO1NBQ25DLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE9BQU8sNkJBQTZCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssQ0FBUztRQUNWLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPO1FBQ1gsSUFBSSxDQUFDLEtBQUssT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsQ0FBUztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxDQUFrQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBNUZELElBNEZDO0FBNUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvcHJvdmlkZXInXG5cbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkRldGFpbCB7XG4gICAgZGF0YTogQXJyYXk8c3RyaW5nPjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGhvdXJzOiBBcnJheTxzdHJpbmc+O1xuICAgIGFib3V0OiBBcnJheTxzdHJpbmc+O1xuICAgIHByb3ZpZGVyczogQXJyYXk8UHJvdmlkZXI+O1xuICAgIGdlbzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHNldEdlbyhnZW8pIHtcbiAgICAgICAgdGhpcy5nZW8gPSBnZW87XG4gICAgfVxuXG4gICAgZ2V0R2VvKCkge1xuICAgICAgICBsZXQgZ2VvID0gdGhpcy5nZW87XG4gICAgICAgIGxldCBsb25naXR1ZGUgPSBnZW8ubWF0Y2goL2xvbmcoLio/KSwvKVsxXVxuICAgICAgICBsZXQgbGF0aXR1ZGUgPSBnZW8ubWF0Y2goL2xhdCguKj8pWyw8XS8pID9cbiAgICAgICAgICAgIGdlby5tYXRjaCgvbGF0KC4qPylbLDxdLylbMV1cbiAgICAgICAgICAgIDogZ2VvLnNwbGl0KCdsYXQnKVsxXVxuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHBhcnNlRmxvYXQobGF0aXR1ZGUpLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwYXJzZUZsb2F0KGxvbmdpdHVkZSlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldEhyZWYoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9wcmltYXJ5LWhlYWx0aC5uZXQvJyArIHRoaXMuZGF0YVswXTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xuICAgIH1cblxuICAgIGdldFBob25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xuXG4gICAgfVxuXG4gICAgZ2V0QWRkcmVzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hYm91dCA/IHRoaXMuYWJvdXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIHB1c2goeDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh4ID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoeCA9PT0gXCJIb3Vyc1wiKSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT09IFwiQ29udGFjdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJzID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGEucHVzaCh4KTtcbiAgICB9XG5cbiAgICBzZXRJbWFnZSh4OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlKVxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHg7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2UoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9wcmltYXJ5LWhlYWx0aC5uZXQvJyArIHRoaXMuaW1hZ2U7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzLnNsaWNlKDAsIC0xKS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICBnZXRBYm91dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hYm91dFsxXTtcbiAgICB9XG5cbiAgICBnZXRDb250YWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xuICAgIH1cblxuICAgIHNldFByb3ZpZGVycyh4OiBBcnJheTxQcm92aWRlcj4pIHtcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSB4O1xuICAgIH1cblxuICAgIGdldFByb3ZpZGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcnM7XG4gICAgfVxufVxuIl19