import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import productSearchResponse from "src/model/mock-api-responses/product-search-response";
import ProductCategories from "src/model/ProductCategories";
import fetchApi from "../../fetch-api";

const productSearchRequest = (http: HttpClient, body: {query: string, category: ProductCategories, offset: number, limit: number}): Observable<typeof productSearchResponse> => {
    return fetchApi("productSearch", http, "post", {
        body,
    })
}

export default productSearchRequest