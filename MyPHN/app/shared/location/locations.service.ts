import { Injectable } from "@angular/core";

var fetchModule = require("fetch");

import * as xmlModule from "tns-core-modules/xml";
import { Location } from "./location";
import { County } from "./county";
import { LocationDetail } from "./detail";
import { Provider } from "../providers/provider"

var currentLocation;
var currentLocations;
var currentCounties;
var currentCounty;
let currentDetail: LocationDetail;

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

var onEventCallback3 = function(event: xmlModule.ParserEvent) {
    switch (event.eventType) {

        case xmlModule.ParserEventType.StartElement:
            if (event.elementName === 'img') {
                currentDetail.setImage(event.attributes['src']);
            }
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName) && attributeName === 'href') {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                    }
                }
            }
            //console.log(message);
            break;

        case xmlModule.ParserEventType.EndElement:
            //            console.log(event.eventType + " " + event.elementName);
            break;

        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                //   console.log(event.eventType + "=\"" + significantText + "\"");
            }
            currentDetail.push(significantText);
            break;
    }
};

var onErrorCallback = function(error: Error) {
    //console.log("Error: " + error.message);
};

var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
var countyParser = new xmlModule.XmlParser(onEventCallback2, onErrorCallback);
var detailParser = new xmlModule.XmlParser(onEventCallback3, onErrorCallback);


@Injectable()
export class LocationsService {
    constructor() { }

    getCountyLocations(href) {
        return fetchModule.fetch(href,
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

    getLocationDetails(id) {
        return fetchModule.fetch('https://primary-health.net/LocationDetail.aspx?id=' + id,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                let drs = x.split('org/Physician">').slice(1)
                let providers: Array<Provider> = [];

                currentDetail = new LocationDetail();
                drs.forEach((dr) => {
                    let service = dr.match(/<h4><span>(.*)<\/span><\/h4>/)[1];
                    let id = dr.match(/\?id=(.*)"/)[1]
                    let name = dr.match(/itle="(.*?)" h/)[1]
                    let provider = new Provider(name);

                    provider.setId(id)
                    provider.setServiceName(service)
                    providers.push(provider)
                })
                currentDetail.setProviders(providers);
                detailParser.parse(
                    '<html><div' +
                    x.split('<div class="post format-image"')[1]);

                return currentDetail;
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
                currentCounties.pop();
                return currentCounties;
            });

    }

    private handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
