import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectProductSearchCategory, selectProductSearchQuery } from 'src/ngrx/product-search-store/product-search-selectors';
import appState from 'src/ngrx/app-state';
import Payload from 'src/model/Payload';
import ProductCategories from 'src/model/ProductCategories';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  subscriptions: Array<Subscription> = []

  searchQuery$: Observable<Payload<string>>
  searchCategory$: Observable<Payload<ProductCategories>>

  searchQuery: string = ""
  searchCategory: ProductCategories = ProductCategories.ALL_CATEGORIES

  constructor(private store: Store<typeof appState>) {
    this.searchQuery$ = this.store.select(selectProductSearchQuery)
    this.searchCategory$ = this.store.select(selectProductSearchCategory)
  }

  ngOnInit() {
    this.subscriptions = [
      this.searchQuery$.subscribe(val => {
        this.searchQuery = val.payload
      }),
      this.searchCategory$.subscribe(val => {
        this.searchCategory = val.payload
      })
    ]
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

}
