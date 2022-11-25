import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import productSearchImagesResponse from 'src/model/mock-api-responses/product-search-images-response';
import productSearchResponse from 'src/model/mock-api-responses/product-search-response';
import ProductCategories from 'src/model/ProductCategories';
import requestBuilder from 'src/util/requests/request-builder';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchProduct$(query: string, category: ProductCategories, offset: number, limit: number): Observable<typeof productSearchResponse>{   
    return requestBuilder.productSearchRequest(this.http, {
      query,
      category,
      offset,
      limit,
    })
  }

  searchProductImages$(productIds: Array<string>, length: number): Observable<typeof productSearchImagesResponse>{
    return requestBuilder.productSearchImagesRequest(this.http, {
      productIds,
      length
    })
  }
}
