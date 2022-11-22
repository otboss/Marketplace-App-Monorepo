import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectProductSearchCategory, selectProductSearchQuery, selectProductSearchState } from 'src/ngrx/product-search-store/product-search-selectors';
import appState from 'src/ngrx/app-state';
import Payload from 'src/model/Payload';
import ProductCategories from 'src/model/ProductCategories';
import AsyncState from 'src/model/AsyncState';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  subscriptions: Array<Subscription> = []

  searchQuery$: Observable<Payload<string>>
  searchCategory$: Observable<Payload<ProductCategories>>
  searchState$: Observable<Payload<AsyncState>>

  searchQuery: string = ""
  searchCategory: ProductCategories = ProductCategories.ALL_CATEGORIES
  searchState: AsyncState = "loading"

  constructor(private store: Store<typeof appState>) {
    this.searchQuery$ = this.store.select(selectProductSearchQuery)
    this.searchCategory$ = this.store.select(selectProductSearchCategory)
    this.searchState$ = this.store.select(selectProductSearchState)
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
      })
    ]
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
