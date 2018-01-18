import { Location } from '../location/location';

export class Provider {
    id;
    service;
    data: Array<string>

    constructor(name: string) {
        this.data = [name];
    }

    setId(x) {
        this.id = x;
    }

    getId() {
        return this.id;
    }

    setServiceName(x) {
        this.service = x;
    }

    getServiceName() {
        return this.service ? this.service : this.data[9];
    }

    getLocations() {
        let i;
        let result = [];

        for (i = 5; i < this.data.length; i += 7) {
            let currentLocation = new Location();

            currentLocation.push(this.data[i]);
            currentLocation.push(this.data[i + 1]);
            currentLocation.push(this.data[i + 6]);
            currentLocation.push(this.data[i + 5]);
            result.push(currentLocation);
        }

        return result;
    }

    getImage() {
        if (this.id)
            return 'https://primary-health.net/images/docimg/' + this.id + '.jpg'
        return 'https://primary-health.net/' + this.data[2];
    }

    getDescription() {
        return this.data[3];
    }

    getName() {
        if (this.data.length === 1)
            return this.data[0]
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
