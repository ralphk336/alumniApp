import { HttpHeaders } from "@angular/common/http";

export class RequestBuilder {
    static buildHeader():any{
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' +localStorage.getItem("authorization")
            })
          };
        return httpOptions;
    }
}
