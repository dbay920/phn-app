export class Service {
    data: Array<string>
    name: string;

    constructor(name: string) {
        this.name = name;
        this.data = [];
    }

    getHref() {
        return this.data[0];
    }

    getId() {
        return this.getHref().split('=')[1];
    }

    getName() {
        return this.name;
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
