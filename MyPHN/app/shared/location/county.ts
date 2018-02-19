export class County {
    data: Array<string>;
    service: string;

    constructor() {
        this.data = [];
    }

    static buildFromName(name: string) {
        let obj = new County();
        let county = name.split(' ')

        if (county.length > 1) {
            obj.push('https://primary-health.net/' + county[0] + '.aspx');
        } else {
            obj.push(county[0]);
        }

        return obj;
    }

    getHref() {
        return this.data[0];
    }

    getName() {
        let parts = this.data[0].split('net/')

        if (parts.length > 1) {
            let x = parts[1];

            if (x)
                return x.split('.')[0] + ' County';
        } else {
            return this.service;
        }
    }

    push(x: string) {
        this.data.push(x);
    }
}
