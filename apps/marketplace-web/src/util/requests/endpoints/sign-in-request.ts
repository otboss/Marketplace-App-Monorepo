import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import signInResponse from "src/model/mock-api-responses/sign-in-response";
import fetchApi from "../../fetch-api";

const signInRequest = (http: HttpClient, body: {email: string, password: string}): Observable<typeof signInResponse> => {
    return fetchApi("signIn", http, "post", {
        body,
    })
}

export default signInRequest