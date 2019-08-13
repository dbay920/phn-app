import { Component, OnInit, } from "@angular/core";
import { LocationsService } from "../shared/location/locations.service";
import { Router } from '@angular/router';

declare var CGSizeMake: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})


export class SearchComponent implements OnInit {

    constructor(
        private _router: Router,
        private locationsService: LocationsService,
    ) {

    }

    webViewSrc;
    searchTerm;

    search() {
        this._router.navigateByUrl(
            'items/(search:search/' + this.searchTerm + ')');
    }

    public ngOnInit(): void {
        this.searchTerm = '';
        this.webViewSrc = '';
    }
}
