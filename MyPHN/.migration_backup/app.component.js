"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            iOSEmulatorFlush: true,
            onMessageReceivedCallback: function (message) {
                alert("" + message.body);
                // if your server passed a custom property called 'foo', then do this:
                //console.log(`Value of 'foo': ${message.data.foo}`);
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFPekQ7SUFDSTtRQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrRkFBa0Y7WUFDbEYsNkJBQTZCO1lBRTdCLGdCQUFnQixFQUFFLElBQUk7WUFFdEIseUJBQXlCLEVBQUUsVUFBQyxPQUFPO2dCQUMvQixLQUFLLENBQUMsS0FBRyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQ3pCLHNFQUFzRTtnQkFDdEUscURBQXFEO1lBQ3pELENBQUM7U0FFSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBdEJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FFcEMsQ0FBQzs7T0FDVyxZQUFZLENBdUJ4QjtJQUFELG1CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG5cbiAgICAgICAgICAgIGlPU0VtdWxhdG9yRmx1c2g6IHRydWUsXG5cbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bWVzc2FnZS5ib2R5fWApO1xuICAgICAgICAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBWYWx1ZSBvZiAnZm9vJzogJHttZXNzYWdlLmRhdGEuZm9vfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=