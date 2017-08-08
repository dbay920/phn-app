import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Service } from "../shared/services/service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./news.component.html",
})

export class NewsComponent implements OnInit {
    services: Array<Service>;
    webViewSrc: string;

    constructor(
        private _router: Router,
    ) {
    }

    goToService(i): void {
        this._router.navigateByUrl("items/services/" + this.services[i].getId())
    }

    ngOnInit(): void {
        this.webViewSrc = 'https://primary-health.net/blog/';
    }

    listViewItemTap(i) {
        this.goToService(i)
    }
}
