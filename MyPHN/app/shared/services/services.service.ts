import { Injectable } from "@angular/core";
import { Service } from "./service"

var fetchModule = require("fetch");

import * as xmlModule from "tns-core-modules/xml";

var currentService = new Service('dummy');
var currentServices;

var onEventCallback = function(event: xmlModule.ParserEvent) {
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
                        currentService.push(event.attributes['href']);
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
                currentServices.push(currentService);
                currentService = new Service(significantText);
                //              console.log(event.eventType + "=\"" + significantText + "\"");
            }
            break;
    }
};

var onErrorCallback = function(error: Error) {
    //console.log("Error: " + error.message);
};

var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);

@Injectable()
export class ServicesService {
    constructor() { }

    getServices() {
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
                currentServices.shift()

                return currentServices;
            });
    }

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

    private handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    }
}
