import { Provider } from '../providers/provider'

export class LocationDetail {
    data: Array<string>;
    image: string;
    hours: Array<string>;
    about: Array<string>;
    providers: Array<Provider>;

    constructor() {
        this.data = [];
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
