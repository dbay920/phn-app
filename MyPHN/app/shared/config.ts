var fetchModule = require("fetch");

export class Config {

    static healthCenters;
    static messageSenderId = '453784066967'; // used for push notifications

    static initialize() {
        let href = 'https://primary-health.net/PHN_SiteLocator/HealthCenters.js'
        fetchModule.fetch(href,
            {
                method: "GET"
            })
            .then(this.handleErrors)
            .then((x) => {
                return x.text();
            })
            .then((x) => {
                x = x.slice(19).split(';')[0];
                Config.healthCenters = JSON.parse(x);
            });
    }

    private static handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
Config.initialize();
