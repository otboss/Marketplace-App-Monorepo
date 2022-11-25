import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import productSearchImagesResponse from "src/model/mock-api-responses/product-search-images-response";
import fetchApi from "../../fetch-api";

const productSearchImagesRequest = (http: HttpClient, body: {productIds: Array<string>, length: number}): Observable<typeof productSearchImagesResponse> => {
    return fetchApi("productGetImages", http, "post", {
        body,
    })
}

export default productSearchImagesRequest