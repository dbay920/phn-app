export class Location {
    data: Array<string>

    constructor() {
        this.data = [];
    }

    getHref() {
        return 'https://primary-health.net/' + this.data[0];
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