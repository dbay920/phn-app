import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ServicesService } from "../shared/services/services.service";
import { Service } from "../shared/services/service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./news.component.html",
})

export class NewsComponent implements OnInit {
    services: Array<Service>;

    constructor(
        private _router: Router,
        private servicesService: ServicesService,
    ) {
    }

    goToService(i): void {
        this._router.navigateByUrl("items/services/" + this.services[i].getId())
    }

    ngOnInit(): void {
        this.servicesService.getServices().then((x) => {
            this.services = x;
        });
    }

    listViewItemTap(i) {
        this.goToService(i)
    }
}
