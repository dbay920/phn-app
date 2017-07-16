import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./term.component.html",
})

export class SearchTermComponent {
    webViewSrc;
    searchTerm;

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.forEach((params) => {
            this.searchTerm = params["term"];
        });

        this.webViewSrc = 'https://primary-health.net/Search.aspx?q='
            + this.searchTerm + '#resInfo-2';
        console.log(this.webViewSrc)
    }
}
