import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { StartComponent } from "./start.component";
import { SomeOtherComponent } from "./some.component";

import { ItemsComponent } from "./item/items.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/items",
        pathMatch: "full"
    },
    {
        path: "items",
        component: ItemsComponent,
        children: [
            // '/home' loaded into `router-outlet` in main content
            { path: "", component: StartComponent },
            // '/home/otherPath' loaded into `router-outlet` in main content
            { path: "otherPath", component: SomeOtherComponent },
            // etc.
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
