import { Config } from '../config'
import * as _ from "lodash";

export class Location {
    data: Array<string>

    constructor() {
        this.data = [];
    }

    // href
    // name
    // phone
    // address
    // image
    // geo
    // county
    // dist

    getHref() {
        return 'https://primary-health.net/' + this.data[0];
    }

    getId() {
        return this.getHref().split('=')[1];
    }

    getImage() {
        if (!this.data[4])
            return ''
        if (this.data[4].indexOf('http') >= 0)
            return this.data[4]
        return 'https://primary-health.net/' + this.data[4]
    }

    getName() {
        return this.data[1];
    }

    getPhone() {
        return this.data[2];

    }
    getAddress() {
        return this.data[3];
    }

    getGeo() {
        let longitude = this.data[5].match(/long(.*?),/)[1]
        let latitude = this.data[5].match(/lat(.*?)[,<]/) ?
            this.data[5].match(/lat(.*?)[,<]/)[1]
            : this.data[5].split('lat')[1]
        let result = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        };

        return result;
    }

    getCounty(): string {
        return this.data[6];
    }

    getDist() {
        return this.data[7];
    }

    push(x: string) {
        this.data.push(x);
    }
}
