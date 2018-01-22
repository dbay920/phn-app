import { Provider } from '../providers/provider'

export class LocationDetail {
    data: Array<string>;
    image: string;
    hours: Array<string>;
    about: Array<string>;
    providers: Array<Provider>;
    geo: string;

    constructor() {
        this.data = [];
    }

    setGeo(geo) {
        this.geo = geo;
    }

    getGeo() {
        let geo = this.geo;
        let longitude = geo.match(/long(.*?),/)[1]
        let latitude = geo.match(/lat(.*?)[,<]/) ?
            geo.match(/lat(.*?)[,<]/)[1]
            : geo.split('lat')[1]
        let result = {
            latitude: latitude,
            longitude: longitude
        };

        return result;
    }

    getHref() {
        return 'https://primary-health.net/' + this.data[0];
    }

    getName() {
        return this.data[2];
    }

    getPhone() {
        return this.data[2];

    }

    getAddress(): string {
        return this.about ? this.about[0] : null;
    }

    push(x: string) {
        if (x === "")
            return;
        if (x === "Hours") {
            this.about = this.data;
            this.data = [];
            return;
        }
        if (x === "Contact") {
            this.hours = this.data;
            this.data = [];
            return;
        }

        this.data.push(x);
    }

    setImage(x: string) {
        if (!this.image)
            this.image = x;
    }

    getImage() {
        return 'https://primary-health.net/' + this.image;
    }

    getHours() {
        return this.hours.slice(0, -1).join('\n');
    }

    getAbout(): string {
        return this.about[1];
    }

    getContact() {
        return this.data[0];
    }

    setProviders(x: Array<Provider>) {
        this.providers = x;
    }

    getProviders(): Array<Provider> {
        return this.providers;
    }
}
