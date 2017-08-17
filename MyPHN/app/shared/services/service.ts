export class Service {
    data: Array<string>

    constructor(name: string) {
        this.data = [name];
    }

    getHref() {
        return this.data[0];
    }

    getId() {
        return this.getHref().split('=')[1];
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
