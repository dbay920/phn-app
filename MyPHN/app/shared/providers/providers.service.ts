import { Injectable } from "@angular/core";
import { Provider } from "./provider";
// converted require to import
import fetchModule from "tns-core-modules/fetch";

import * as xmlModule from "tns-core-modules/xml";

var currentProvider;

var onEventCallback = function(event: xmlModule.ParserEvent) {
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

var onErrorCallback = function(error: Error) {
    //console.log("Error: " + error.message);
};

var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);

@Injectable()
export class ProvidersService {
    constructor() { }

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

    getDetails(id: string) {
        return fetchModule.fetch(
            'https://primary-health.net/DoctorBio.aspx?id=' + id,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                let text = x.text();

                return text;
            })
            .then((x) => {
                currentProvider = new Provider('empty');
                xmlParser.parse('<html><div' + x.split('<div class="row"')[2]);
                xmlParser.parse('<html><div' + x.split('<div class="row"')[3]);

                return currentProvider;
            });
    }

    private handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    }
}
