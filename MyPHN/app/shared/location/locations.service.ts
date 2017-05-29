import { Injectable } from "@angular/core";

var fetchModule = require("fetch");

import * as xmlModule from "tns-core-modules/xml";

var onEventCallback = function(event: xmlModule.ParserEvent) {
    switch (event.eventType) {

        case xmlModule.ParserEventType.StartElement:
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                    }
                }
            }
            console.log(message);
            break;

        case xmlModule.ParserEventType.EndElement:
            console.log(event.eventType + " " + event.elementName);
            break;

        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                console.log(event.eventType + "=\"" + significantText + "\"");
            }
            break;
    }
};

var onErrorCallback = function(error: Error) {
    console.log("Error: " + error.message);
};

var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);


@Injectable()
export class LocationsService {
    constructor() { }

    getCountyLocations() {




        return fetchModule.fetch("https://primary-health.net/Clarion.aspx", {
            method: "GET"
        }).then(this.handleErrors)
            .then((x) => {
                return x.text();
            }).then((x) => {
                console.log(x);
                return xmlParser.parse('<html><article' + x.split('<article')[1]);
            })



    }

    /*    login(user: User) {
            return this.http.get(
                Config.apiUrl + "users/",
                { headers: user.getHeaders() }
            ).map(response => response.json()).do(data => {
                Config.user = user;
            }).catch(this.handleErrors);
        }*/

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
