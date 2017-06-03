import { Injectable } from "@angular/core";

var fetchModule = require("fetch");

import * as xmlModule from "tns-core-modules/xml";
import { Location } from "./location";
import { County } from "./county";
var currentLocation;
var currentLocations;
var currentCounties;
var currentCounty;

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
            //            console.log(message);
            break;

        case xmlModule.ParserEventType.EndElement:
            //          console.log(event.eventType + " " + event.elementName);
            break;

        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                //            console.log(event.eventType + "=\"" + significantText + "\"");
                currentLocation.push(significantText);
            }
            break;
    }
};

var onEventCallback2 = function(event: xmlModule.ParserEvent) {
    switch (event.eventType) {

        case xmlModule.ParserEventType.StartElement:

            if (event.elementName !== 'a')
                break;
            currentCounty = new County();
            currentCounties.push(currentCounty);
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'href') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                        currentCounty.push(event.attributes['href']);
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
                //currentCounty.push(significantText);
            }
            break;
    }
};

var onErrorCallback = function(error: Error) {
    //console.log("Error: " + error.message);
};

var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
var countyParser = new xmlModule.XmlParser(onEventCallback2, onErrorCallback);


@Injectable()
export class LocationsService {
    constructor() { }

    getCountyLocations() {
        return fetchModule.fetch("https://primary-health.net/Clarion.aspx",
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                currentLocations = [];

                xmlParser.parse('<html><article' + x.split('<article')[1]);
                return currentLocations;
            });
    }

    getCounties() {
        return fetchModule.fetch("https://primary-health.net",
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((z) => {
                return z.text();
            })
            .then((y) => {
                currentCounties = [];

                //                currentCounties = x.split('Health Centers</a>')[1];
                countyParser.parse('<html>' + y.split('Health Centers</a>')[1]);
                currentCounties.pop();
                return currentCounties;
            });

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
