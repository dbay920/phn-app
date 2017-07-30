import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./portal.component.html",
})

export class PortalComponent {
    webViewSrc;
    searchTerm;

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) {
        /*this.route.params.forEach((params) => {
            this.searchTerm = params["term"];
        });*/

        //this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
        //  + this.searchTerm + '#resInfo-2';
        //console.log(this.webViewSrc)
        this.webViewSrc = 'https://www.medfusion.net/primaryhealth-21154/portal/#/user/login';
    }
}
