import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ServicesService } from "../shared/services/services.service";
import { Service } from "../shared/services/service"
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsComponent } from '../items.component';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./providers.component.html",
    styleUrls: ['./providers.css', './providers-common.css']
})

export class ProvidersComponent implements OnInit {
    services: Array<Service>;

    constructor(
        private _router: Router,
        private servicesService: ServicesService,
    ) {
    }

    goToService(i): void {
        this._router.navigateByUrl("items/(services:services/" +
            this.services[i].getId() + ')')
        ItemsComponent.setSelectedIndex(5);
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
