import { Injectable } from '@angular/core';
import * as utilsModule from 'tns-core-modules/utils/utils';
import { isIOS } from 'tns-core-modules/ui/page/page';
import { Location } from '~/shared/location/location';
import * as _ from 'lodash';

import { Directions } from "nativescript-directions";

@Injectable({
    providedIn: 'root'
})
export class MapsService {

    private directions: Directions;

    constructor() {
        this.directions = new Directions();
    }

    public openMapApp(loc: Location) {
        if (isIOS) {
            const addr = loc.getAddress();
            const first = addr.split(',')[0];
            const match = addr.match(/ [A-Z][A-Z] /);
            const state = match[0].trim();
            const city = addr.split(',')[1].slice(0, match.index).trim();
            const street = _.split(first, ' ');
            const n = street.shift();

            const url =
                `http://maps.apple.com/?address=${n},${_.join(street, '+')},${city},${state}`;

            utilsModule.openUrl(url);
        } else {
            const geo = loc.getGeo();
            const lat = geo.latitude;
            const lng = geo.longitude;

            this.directions.available().then((avail: boolean) => {
                if (avail) {
                    this.directions.navigate({
                        to: {
                            address: loc.getAddress(),
                            // lat,
                            // lng,
                        }
                    }).then((__: any) => {
                        // success
                    }).catch((__: any) => {
                        // error
                    });
                } else {
                    alert('Maps are not available');
                }
            });
            //            utilsModule.openUrl(`geo:${lat},${long}`);
        }
    }
}

