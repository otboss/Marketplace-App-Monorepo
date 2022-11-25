import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectProductSearchCategory, selectProductSearchQuery, selectProductSearchResult, selectProductSearchResultImages, selectProductSearchState } from 'src/ngrx/product-search-store/product-search-selectors';
import appState from 'src/ngrx/app-state';
import Payload from 'src/model/Payload';
import ProductCategories from 'src/model/ProductCategories';
import AsyncState from 'src/model/AsyncState';
import productSearchResponse from 'src/model/mock-api-responses/product-search-response';
import productSearchImagesResponse from 'src/model/mock-api-responses/product-search-images-response';
import { Router } from '@angular/router';
import { RouteMapper } from 'src/model/RouteMapper';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // @Input() searchResults: Array<Product> = []

  subscriptions: Array<Subscription> = []

  searchQuery$: Observable<Payload<string>>
  searchCategory$: Observable<Payload<ProductCategories>>
  searchState$: Observable<Payload<AsyncState>>
  searchResult$: Observable<Payload<typeof productSearchResponse>>
  searchResultImages$: Observable<Payload<typeof productSearchImagesResponse>>

  searchQuery: string = ""
  searchCategory: ProductCategories = ProductCategories.ALL_CATEGORIES
  searchState: AsyncState = "loading"
  searchResult: typeof productSearchResponse = []
  searchResultImages: typeof productSearchImagesResponse = {}
  
  isResultsListView: boolean = false


  constructor(private store: Store<typeof appState>, private router: Router) {  
    this.searchQuery$ = this.store.select(selectProductSearchQuery)
    this.searchCategory$ = this.store.select(selectProductSearchCategory)
    this.searchState$ = this.store.select(selectProductSearchState)
    this.searchResult$ = this.store.select(selectProductSearchResult)
    this.searchResultImages$ = this.store.select(selectProductSearchResultImages)
  }

  ngOnInit() {  
    this.subscriptions = [
      this.searchQuery$.subscribe(val => {
        this.searchQuery = val.payload
      }),
      this.searchCategory$.subscribe(val => {
        this.searchCategory = val.payload
      }),
      this.searchState$.subscribe(val => {
        this.searchState = val.payload
      }),
      this.searchResult$.subscribe(val => {
        this.searchResult = val.payload
      }),
      this.searchResultImages$.subscribe(val => {
        this.searchResultImages = val.payload
      })
    ]
  }

  ngAfterViewInit(){
    if(this.searchQuery == ""){
      this.router.navigateByUrl(RouteMapper.home)
    }  
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  generateArray(length: number){
    return Array(length).fill(1)
  }

  viewProductDetails(productId: string){
    this.router.navigateByUrl(RouteMapper.productDetails+"?productId="+productId)
  }
 
}
