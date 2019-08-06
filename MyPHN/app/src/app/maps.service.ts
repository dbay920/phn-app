import { Injectable } from '@angular/core';
import * as utilsModule from 'tns-core-modules/utils/utils';

@Injectable({
    providedIn: 'root'
})
export class MapsService {

    constructor() { }

    public openMapApp(lat: number, long: number) {
        utilsModule.openUrl(`geo:${lat},${long}`);
    }
}

