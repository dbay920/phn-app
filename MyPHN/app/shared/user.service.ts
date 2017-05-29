import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    constructor(private http: Http) { }


    // TODO: add register functionality
    register() {
        let headers = new Headers();
        return this.http.get(
            "users/",

            { headers: headers }
        )
            .catch(this.handleErrors);
    }

    /*    login(user: User) {
            return this.http.get(
                Config.apiUrl + "users/",
                { headers: user.getHeaders() }
            ).map(response => response.json()).do(data => {
                Config.user = user;
            }).catch(this.handleErrors);
        }*/

    handleErrors(error: Response) {
        alert(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
