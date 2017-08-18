import { Location } from '../location/location';

export class Provider {
    data: Array<string>

    constructor(name: string) {
        this.data = [name];
    }

    getHref() {
        return this.data[6];
    }

    getId() {
        return this.getHref().split('=')[1];
    }

    getServiceName() {
        return this.data[10];
    }

    getLocations() {
        let i;
        let result = [];

        for (i = 6; i < this.data.length; i += 7) {
            let currentLocation = new Location();

            currentLocation.push(this.data[i]);
            currentLocation.push(this.data[i + 1]);
            currentLocation.push(this.data[i + 5]);
            currentLocation.push(this.data[i + 6]);
            result.push(currentLocation);
        }

        return result;
    }

    getImage() {
        return this.data[2];
    }

    getDescription() {
        return this.data[3];
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

    push(x: string) {
        this.data.push(x);
    }
}
