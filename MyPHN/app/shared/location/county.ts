export class County {
    data: Array<string>

    constructor() {
        this.data = [];
    }

    getHref() {
        return this.data[0];
    }

    getName() {
        return this.data[0].split('net/')[1].split('.')[0] + ' County';
    }

    push(x: string) {
        this.data.push(x);
    }
}
