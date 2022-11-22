import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Product from 'src/model/api-response-types/Product';
import productSearchResponse from 'src/model/mock-api-responses/product-search-response';
import ProductCategories from 'src/model/ProductCategories';
import fetchApi from 'src/util/fetch-api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchProduct$(query: string, category: ProductCategories, page: number): Observable<typeof productSearchResponse>{
    const queryParams = {
      query, 
      category,
      page,
    }
    // const completeUrl: string = environment.backend.endpoints.productSearch()
    // const queryParamString: string = completeUrl.slice(completeUrl.indexOf("?")+1)    
    return fetchApi<Product[]>("productSearch", this.http, "get", {
      queryParams
    })
  }
}
