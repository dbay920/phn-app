export class County {
    data: Array<string>

    constructor() {
        this.data = [];
    }

    static buildFromName(name: string) {
        let obj = new County();
        obj.push('https://primary-health.net/' + name.split(' ')[0] + '.aspx');
        return obj;
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
