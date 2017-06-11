export class LocationDetail {
    data: Array<string>;
    image: string;
    hours: Array<string>;
    about: Array<string>;

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

    getAddress(): string {
        return this.about[0];
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
        this.image = x;
    }

    getImage() {
        return this.image;
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

    getProviders() {
        return {};
    }
}
