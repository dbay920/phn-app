"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var provider_1 = require("./provider");
var fetchModule = require("fetch");
var xmlModule = require("tns-core-modules/xml");
var currentProvider;
var onEventCallback = function (event) {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            if (event.elementName !== 'img' && event.elementName !== 'a')
                break;
            //currentLocation = new Location();
            //currentLocations.push(currentLocation);
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'src') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                        currentProvider.push(event.attributes['src']);
                    }
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'href') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                        currentProvider.push(event.attributes['href']);
                    }
                }
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            //console.log(event.eventType + " " + event.elementName);
            break;
        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                currentProvider.push(significantText);
            }
            break;
    }
};
var onErrorCallback = function (error) {
    //console.log("Error: " + error.message);
};
var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
var ProvidersService = /** @class */ (function () {
    function ProvidersService() {
    }
    /*   getServices() {
           return fetchModule.fetch('https://primary-health.net/',
               {
                   method: "GET"
               })
               .then(this.handleErrors)
               .then((x) => {
                   return x.text();
               })
               .then((x) => {
                   currentServices = [];

                   xmlParser.parse(
                       '<html><li' +
                       x.split('<li class="dropdown yamm-fullwidth"')[1]
                   );
                   currentServices.shift()

                   return currentServices;
               });
       }*/
    ProvidersService.prototype.getDetails = function (id) {
        return fetchModule.fetch('https://primary-health.net/DoctorBio.aspx?id=' + id, {
            method: "GET"
        })
            .then(this.handleErrors)
            .then(function (x) {
            var text = x.text();
            return text;
        })
            .then(function (x) {
            currentProvider = new provider_1.Provider('empty');
            xmlParser.parse('<html><div' + x.split('<div class="row"')[2]);
            xmlParser.parse('<html><div' + x.split('<div class="row"')[3]);
            return currentProvider;
        });
    };
    ProvidersService.prototype.handleErrors = function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };
    ProvidersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProvidersService);
    return ProvidersService;
}());
exports.ProvidersService = ProvidersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm92aWRlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1Q0FBc0M7QUFFdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRW5DLGdEQUFrRDtBQUVsRCxJQUFJLGVBQWUsQ0FBQztBQUVwQixJQUFJLGVBQWUsR0FBRyxVQUFTLEtBQTRCO0lBQ3ZELFFBQVEsS0FBSyxDQUFDLFNBQVMsRUFBRTtRQUVyQixLQUFLLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUV2QyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssR0FBRztnQkFDeEQsTUFBTTtZQUNWLG1DQUFtQztZQUNuQyx5Q0FBeUM7WUFDekMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN4RCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxlQUFlLENBQUM7Z0JBQzNCLEtBQUssSUFBSSxhQUFhLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDeEMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFhLEtBQUssS0FBSyxFQUFFO3dCQUMzRSxPQUFPLElBQUksR0FBRyxHQUFHLGFBQWEsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ2hGLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUNqRDtvQkFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQWEsS0FBSyxNQUFNLEVBQUU7d0JBQzVFLE9BQU8sSUFBSSxHQUFHLEdBQUcsYUFBYSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEYsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2xEO2lCQUNKO2FBQ0o7WUFDRCxNQUFNO1FBRVYsS0FBSyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDckMseURBQXlEO1lBQ3pELE1BQU07UUFFVixLQUFLLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSTtZQUMvQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hDLElBQUksZUFBZSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN6QztZQUNELE1BQU07S0FDYjtBQUNMLENBQUMsQ0FBQztBQUVGLElBQUksZUFBZSxHQUFHLFVBQVMsS0FBWTtJQUN2Qyx5Q0FBeUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUcxRTtJQUNJO0lBQWdCLENBQUM7SUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBb0JNO0lBRU4scUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUNwQiwrQ0FBK0MsR0FBRyxFQUFFLEVBQ3BEO1lBQ0ksTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLENBQUM7WUFDSixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFcEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNKLGVBQWUsR0FBRyxJQUFJLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0QsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sdUNBQVksR0FBcEIsVUFBcUIsUUFBUTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFwRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBcUQ1QjtJQUFELHVCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVyXCI7XG5cbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJmZXRjaFwiKTtcblxuaW1wb3J0ICogYXMgeG1sTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiO1xuXG52YXIgY3VycmVudFByb3ZpZGVyO1xuXG52YXIgb25FdmVudENhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQ6IHhtbE1vZHVsZS5QYXJzZXJFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuZXZlbnRUeXBlKSB7XG5cbiAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLlN0YXJ0RWxlbWVudDpcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmVsZW1lbnROYW1lICE9PSAnaW1nJyAmJiBldmVudC5lbGVtZW50TmFtZSAhPT0gJ2EnKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy9jdXJyZW50TG9jYXRpb24gPSBuZXcgTG9jYXRpb24oKTtcbiAgICAgICAgICAgIC8vY3VycmVudExvY2F0aW9ucy5wdXNoKGN1cnJlbnRMb2NhdGlvbik7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmV2ZW50VHlwZSArIFwiIFwiICsgZXZlbnQuZWxlbWVudE5hbWU7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCIsIEF0dHJpYnV0ZXM6XCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBldmVudC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZU5hbWUpICYmIGF0dHJpYnV0ZU5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwiIFwiICsgYXR0cmlidXRlTmFtZSArIFwiPVxcXCJcIiArIGV2ZW50LmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlci5wdXNoKGV2ZW50LmF0dHJpYnV0ZXNbJ3NyYyddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSAmJiBhdHRyaWJ1dGVOYW1lID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCIgXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCI9XFxcIlwiICsgZXZlbnQuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyLnB1c2goZXZlbnQuYXR0cmlidXRlc1snaHJlZiddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgeG1sTW9kdWxlLlBhcnNlckV2ZW50VHlwZS5FbmRFbGVtZW50OlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC5ldmVudFR5cGUgKyBcIiBcIiArIGV2ZW50LmVsZW1lbnROYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgeG1sTW9kdWxlLlBhcnNlckV2ZW50VHlwZS5UZXh0OlxuICAgICAgICAgICAgdmFyIHNpZ25pZmljYW50VGV4dCA9IGV2ZW50LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHNpZ25pZmljYW50VGV4dCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlci5wdXNoKHNpZ25pZmljYW50VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG52YXIgb25FcnJvckNhbGxiYWNrID0gZnVuY3Rpb24oZXJyb3I6IEVycm9yKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xufTtcblxudmFyIHhtbFBhcnNlciA9IG5ldyB4bWxNb2R1bGUuWG1sUGFyc2VyKG9uRXZlbnRDYWxsYmFjaywgb25FcnJvckNhbGxiYWNrKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvKiAgIGdldFNlcnZpY2VzKCkge1xuICAgICAgICAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goJ2h0dHBzOi8vcHJpbWFyeS1oZWFsdGgubmV0LycsXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRleHQoKTtcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgeG1sUGFyc2VyLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAnPGh0bWw+PGxpJyArXG4gICAgICAgICAgICAgICAgICAgICAgIHguc3BsaXQoJzxsaSBjbGFzcz1cImRyb3Bkb3duIHlhbW0tZnVsbHdpZHRoXCInKVsxXVxuICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2VzLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VydmljZXM7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICB9Ki9cblxuICAgIGdldERldGFpbHMoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goXG4gICAgICAgICAgICAnaHR0cHM6Ly9wcmltYXJ5LWhlYWx0aC5uZXQvRG9jdG9yQmlvLmFzcHg/aWQ9JyArIGlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgLnRoZW4oKHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHgudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgeG1sUGFyc2VyLnBhcnNlKCc8aHRtbD48ZGl2JyArIHguc3BsaXQoJzxkaXYgY2xhc3M9XCJyb3dcIicpWzJdKTtcbiAgICAgICAgICAgICAgICB4bWxQYXJzZXIucGFyc2UoJzxodG1sPjxkaXYnICsgeC5zcGxpdCgnPGRpdiBjbGFzcz1cInJvd1wiJylbM10pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlcjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbiJdfQ==