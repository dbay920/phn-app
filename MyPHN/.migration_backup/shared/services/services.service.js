"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("./service");
var fetchModule = require("fetch");
var xmlModule = require("tns-core-modules/xml");
var currentService = new service_1.Service('dummy');
var currentServices;
var onEventCallback = function (event) {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            if (event.elementName !== 'a')
                break;
            //currentLocation = new Location();
            //currentLocations.push(currentLocation);
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'href') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                        currentService = new service_1.Service(event.attributes['href']);
                        currentServices.push(currentService);
                    }
                }
            }
            //  console.log(message);
            break;
        case xmlModule.ParserEventType.EndElement:
            //console.log(event.eventType + " " + event.elementName);
            break;
        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                currentService.push(significantText);
                //              console.log(event.eventType + "=\"" + significantText + "\"");
            }
            break;
    }
};
var onErrorCallback = function (error) {
    //console.log("Error: " + error.message);
};
var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
var ServicesService = /** @class */ (function () {
    function ServicesService() {
    }
    ServicesService.prototype.getServices = function () {
        return fetchModule.fetch('https://primary-health.net/', {
            method: "GET"
        })
            .then(this.handleErrors)
            .then(function (x) {
            return x.text();
        })
            .then(function (x) {
            currentServices = [];
            xmlParser.parse('<html><li' +
                x.split('<li class="dropdown yamm-fullwidth"')[1]);
            currentServices.shift();
            return currentServices;
        });
    };
    /*getDetails(id: number) {
        console.log(id)

        return fetchModule.fetch(
            'https://primary-health.net/ServiceDetail.aspx?id=' + id,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                let text = x.text();

                return text;
            })
            .then((x) => {
                console.log(x);
                currentServices = [];

                xmlParser.parse('<html><li' + x.split('<li class="dropdown yamm-fullwidth"')[1]);
                currentServices.push(currentService)
                currentServices.shift()
                currentServices.shift()

                return currentServices;
            });
    }*/
    ServicesService.prototype.handleErrors = function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };
    ServicesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ServicesService);
    return ServicesService;
}());
exports.ServicesService = ServicesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW1DO0FBRW5DLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVuQyxnREFBa0Q7QUFFbEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLElBQUksZUFBZSxDQUFDO0FBRXBCLElBQUksZUFBZSxHQUFHLFVBQVMsS0FBNEI7SUFDdkQsUUFBUSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBRXJCLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZO1lBRXZDLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxHQUFHO2dCQUN6QixNQUFNO1lBQ1YsbUNBQW1DO1lBQ25DLHlDQUF5QztZQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3hELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLGVBQWUsQ0FBQztnQkFDM0IsS0FBSyxJQUFJLGFBQWEsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUN4QyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQWEsS0FBSyxNQUFNLEVBQUU7d0JBQzVFLE9BQU8sSUFBSSxHQUFHLEdBQUcsYUFBYSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEYsY0FBYyxHQUFHLElBQUksaUJBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3ZELGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3hDO2lCQUNKO2FBQ0o7WUFDRCx5QkFBeUI7WUFDekIsTUFBTTtRQUVWLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxVQUFVO1lBQ3JDLHlEQUF5RDtZQUN6RCxNQUFNO1FBRVYsS0FBSyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUk7WUFDL0IsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxJQUFJLGVBQWUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JDLDhFQUE4RTthQUNqRjtZQUNELE1BQU07S0FDYjtBQUNMLENBQUMsQ0FBQztBQUVGLElBQUksZUFBZSxHQUFHLFVBQVMsS0FBWTtJQUN2Qyx5Q0FBeUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUcxRTtJQUNJO0lBQWdCLENBQUM7SUFFakIscUNBQVcsR0FBWDtRQUNJLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFDbEQ7WUFDSSxNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLENBQUM7WUFDSixlQUFlLEdBQUcsRUFBRSxDQUFDO1lBRXJCLFNBQVMsQ0FBQyxLQUFLLENBQ1gsV0FBVztnQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3BELENBQUM7WUFDRixlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFdkIsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5Qkc7SUFFSyxzQ0FBWSxHQUFwQixVQUFxQixRQUFRO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQTFEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTJEM0I7SUFBRCxzQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZVwiXG5cbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJmZXRjaFwiKTtcblxuaW1wb3J0ICogYXMgeG1sTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiO1xuXG52YXIgY3VycmVudFNlcnZpY2UgPSBuZXcgU2VydmljZSgnZHVtbXknKTtcbnZhciBjdXJyZW50U2VydmljZXM7XG5cbnZhciBvbkV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbihldmVudDogeG1sTW9kdWxlLlBhcnNlckV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5ldmVudFR5cGUpIHtcblxuICAgICAgICBjYXNlIHhtbE1vZHVsZS5QYXJzZXJFdmVudFR5cGUuU3RhcnRFbGVtZW50OlxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZWxlbWVudE5hbWUgIT09ICdhJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vY3VycmVudExvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XG4gICAgICAgICAgICAvL2N1cnJlbnRMb2NhdGlvbnMucHVzaChjdXJyZW50TG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBldmVudC5ldmVudFR5cGUgKyBcIiBcIiArIGV2ZW50LmVsZW1lbnROYW1lO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwiLCBBdHRyaWJ1dGVzOlwiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gZXZlbnQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSAmJiBhdHRyaWJ1dGVOYW1lID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCIgXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCI9XFxcIlwiICsgZXZlbnQuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2UgPSBuZXcgU2VydmljZShldmVudC5hdHRyaWJ1dGVzWydocmVmJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2VzLnB1c2goY3VycmVudFNlcnZpY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLkVuZEVsZW1lbnQ6XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LmV2ZW50VHlwZSArIFwiIFwiICsgZXZlbnQuZWxlbWVudE5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLlRleHQ6XG4gICAgICAgICAgICB2YXIgc2lnbmlmaWNhbnRUZXh0ID0gZXZlbnQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUZXh0ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2UucHVzaChzaWduaWZpY2FudFRleHQpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5ldmVudFR5cGUgKyBcIj1cXFwiXCIgKyBzaWduaWZpY2FudFRleHQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG52YXIgb25FcnJvckNhbGxiYWNrID0gZnVuY3Rpb24oZXJyb3I6IEVycm9yKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xufTtcblxudmFyIHhtbFBhcnNlciA9IG5ldyB4bWxNb2R1bGUuWG1sUGFyc2VyKG9uRXZlbnRDYWxsYmFjaywgb25FcnJvckNhbGxiYWNrKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldFNlcnZpY2VzKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goJ2h0dHBzOi8vcHJpbWFyeS1oZWFsdGgubmV0LycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgeG1sUGFyc2VyLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAnPGh0bWw+PGxpJyArXG4gICAgICAgICAgICAgICAgICAgIHguc3BsaXQoJzxsaSBjbGFzcz1cImRyb3Bkb3duIHlhbW0tZnVsbHdpZHRoXCInKVsxXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2VzLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VydmljZXM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKmdldERldGFpbHMoaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhpZClcblxuICAgICAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goXG4gICAgICAgICAgICAnaHR0cHM6Ly9wcmltYXJ5LWhlYWx0aC5uZXQvU2VydmljZURldGFpbC5hc3B4P2lkPScgKyBpZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIC50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSB4LnRleHQoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2VzID0gW107XG5cbiAgICAgICAgICAgICAgICB4bWxQYXJzZXIucGFyc2UoJzxodG1sPjxsaScgKyB4LnNwbGl0KCc8bGkgY2xhc3M9XCJkcm9wZG93biB5YW1tLWZ1bGx3aWR0aFwiJylbMV0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlcy5wdXNoKGN1cnJlbnRTZXJ2aWNlKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2VzLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VydmljZXM7XG4gICAgICAgICAgICB9KTtcbiAgICB9Ki9cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbiJdfQ==