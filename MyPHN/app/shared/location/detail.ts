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
    getAddress() {
        return this.data[3];
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
}
