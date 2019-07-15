import { Injectable } from "@angular/core";
// converted require to import
import fetchModule from "tns-core-modules/fetch";

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

var countyParser = new xmlModule.XmlParser(onEventCallback2, onErrorCallback);
var detailParser = new xmlModule.XmlParser(onEventCallback3, onErrorCallback);


@Injectable()
export class LocationsService {
    constructor() { }

    getServiceLocationsText(id) {
        return fetchModule.fetch('https://primary-health.net/ServiceDetail.aspx?id=' + id,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                const token = '<!-- /.etabs -->'
                let result = x.split(token);

                //console.log(result.length)

                return result[1];
            })
    }

    getAllLocations() {
        return fetchModule.fetch('https://primary-health.net/Locations.aspx',
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                let counties = x.split('<article')[1]
                    .split('id="Content_CountyList_CountyLabel_').splice(1);
                let results = [];

                counties.forEach((county) => {
                    let locations = county.split(
                        /<ul style="list-style-type: none;">/gm).slice(1);
                    let countyName = county.match(/>(.*?)</)[1];

                    locations.forEach((location) => {
                        let result = new Location();
                        let href = location.match(/href="(.*?)"/)[1];
                        let name = location.match(/itle="(.*?)"/)[1];
                        let phone = location.match(/PhoneLabel_.*?">(.*?)</)[1];
                        let address = location.match(/AddressLabel_.*?">(.*?)</)[1];
                        let image = location.match(/image_.*?">(.*?)</)[1];
                        let geo = location.match(/geoData_.*?">(.*?)</)[1];

                        result.push(href)
                        result.push(name)
                        result.push(phone)
                        result.push(address)
                        result.push(image)
                        result.push(geo)
                        result.push(countyName)
                        results.push(result);
                    });

                });

                return results;
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
                let geo = x.match(/<meta name="keywords" content="(.*?)"/)[1];
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
                currentDetail.setGeo(geo);
                detailParser.parse(
                    '<html><div' +
                    x.split('<div class="post format-image"')[1]);

                return currentDetail;
            });
    }

    getServiceProviders(id) {
        return fetchModule.fetch('https://primary-health.net/ServiceDetail.aspx?id=' + id,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                const token = '<!-- /.etabs -->'
                let result = x.split(token);
                let drs = x.split('org/Physician">').slice(1)
                let providers: Array<Provider> = [];

                drs.forEach((dr) => {
                    let service = dr.split('span')[6].slice(1, -2)
                    let id = dr.match(/\?id=(.*?)"/)[1]
                    let name = dr.match(/itle="(.*?)" h/)[1]
                    let provider = new Provider(name);

                    provider.setId(id)
                    provider.setServiceName(service)
                    providers.push(provider)
                })

                return providers;
            })

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

    private handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
