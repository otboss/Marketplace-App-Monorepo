import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import productSearchResponse from "../model/mock-api-responses/product-search-response";
import signInResponse from "../model/mock-api-responses/sign-in-response";

const fetchApi = <T>(
    endpoint: keyof typeof environment.backend.endpoints,
    http: HttpClient, 
    method: "get" | "post" | "put" | "delete",
    options?:Partial<{
        body: any,
        queryParams: any,
        headers: HttpHeaders | {
            [header: string]: string | string[];
        },
        mockApiResponseTime: number
    }>
): Observable<T> => {
    const mockApiResponseTime: number = options?.mockApiResponseTime != null ? options?.mockApiResponseTime : 1000

    if(environment.useMockAPI === true){
        function throwBadEndpointPath(p: never): never;
        function throwBadEndpointPath(p: keyof typeof environment.backend.endpoints) {
            throw new Error('Endpoint handling was not implemented for mock');
        }
        const observable = new Observable((observer) => {
            switch(endpoint){
                case "signIn":
                    setTimeout(() => observer.next(signInResponse), mockApiResponseTime) 
                    break
                case "signOut":
                    setTimeout(() => observer.next(), mockApiResponseTime) 
                    break
                case "signUp":
                    setTimeout(() => observer.next(), mockApiResponseTime) 
                    break
                case "productSearch":
                    setTimeout(() => observer.next(productSearchResponse), mockApiResponseTime) 
                    break
                case "forgotPassword":
                    setTimeout(() => observer.next(), mockApiResponseTime) 
                    break
                default:
                    throwBadEndpointPath(endpoint)
            }
        })
        const result: Observable<any> = observable
        return result
    }

    const endpointWithParams: string = environment.backend.endpoints[endpoint](options?.queryParams)
    const url = environment.backend.backendOrigin+endpointWithParams
    const headers = options?.headers
    const body = options?.body

    switch(method){
        case "get":
            return http.get<T>(url,  {
                headers,
                responseType: "json",
            })  
        case "post":
            return http.post<T>(url, body, {
                headers,
                responseType: 'json',
            })            
        case "put":
            return http.put<T>(url, body, {
                headers,
                responseType: 'json',
            })  
        case "delete":
            return http.delete<T>(url, {
                headers,
                responseType: 'json',
            })  
    }
}

export default fetchApi 