import { Injectable } from "@angular/core";

var fetchModule = require("fetch");

@Injectable()
export class CensusService {
    constructor() { }

    getLocation(address: string) {
        let encoded = address.replace(/ /g, '+').replace(/,/g, '%2C');

        let href = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=' + encoded +
            // 4600+Silver+Hill+Rd%2C+Suitland%2C+MD+20746
            '&benchmark=9&format=json';


        return fetchModule.fetch(href,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                //console.log(x.text());
                let json = x.json();
                return json;

            }).then(raw => {
                let json = raw;
                let cond = (json.result &&
                    json.result.addressMatches &&
                    json.result.addressMatches.length > 0)
                let result = cond ? {
                    latitude: json.result.addressMatches[0].coordinates.y,
                    longitude: json.result.addressMatches[0].coordinates.x
                } : {};

                return result;
            })
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
