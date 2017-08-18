import { Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { ProvidersService } from "../shared/providers/providers.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../shared/providers/provider'

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css", 'detail-common.css']
})

export class ProviderDetailComponent implements OnInit {
    id: string;
    provider: Provider;
    name;
    desc;
    locations;
    image;
    area;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private providersService: ProvidersService,
        private _ngZone: NgZone
    ) {
    }

    /*listViewItemTap(i): void {
        this.goToLocations(i);
    }*/

    /*goToLocations(i): void {
        this._router.navigateByUrl("items/locations/detail/" + this.locations[i].getId());
    }*/

    ngOnInit(): void {
        this.route.params.forEach((params) => {
            this.id = params["id"];
        });

        this.providersService.getDetails(this.id).then((x) => {
            this.provider = x;
            this.name = this.provider.getName();
            this.desc = this.provider.getDescription();
            this.locations = this.provider.getLocations();
            this.image = this.provider.getImage();
            this.area = this.provider.getServiceName();
            this._ngZone.run(() => {
                // weird fix for arriving from webview
            })
        },
            (error) => alert("Could not load locations.")
        );
    }
}
