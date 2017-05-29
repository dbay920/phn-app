import { Injectable } from "@angular/core";

var fetchModule = require("fetch");

import * as xmlModule from "tns-core-modules/xml";
import { Location } from "./location";
var currentLocation;
var currentLocations;

var onEventCallback = function(event: xmlModule.ParserEvent) {
    switch (event.eventType) {

        case xmlModule.ParserEventType.StartElement:

            if (event.elementName !== 'a')
                break;
            currentLocation = new Location();
            currentLocations.push(currentLocation);
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'href') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                        currentLocation.push(event.attributes['href']);
                    }
                }
            }
            //console.log(message);
            break;

        case xmlModule.ParserEventType.EndElement:
            //console.log(event.eventType + " " + event.elementName);
            break;

        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                //console.log(event.eventType + "=\"" + significantText + "\"");
                currentLocation.push(significantText);
            }
            break;
    }
};

var onErrorCallback = function(error: Error) {
    //console.log("Error: " + error.message);
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

                currentLocations = [];

                xmlParser.parse('<html><article' + x.split('<article')[1]);
                return currentLocations;
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
