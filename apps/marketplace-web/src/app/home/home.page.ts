import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RouteMapper } from 'src/model/RouteMapper';
import ProductCategories from 'src/model/ProductCategories';
import { Store } from '@ngrx/store';
import { setProductSearchCategory, setProductSearchQuery, setProductSearchState } from 'src/ngrx/product-search-store/product-search-actions';
import appState from 'src/ngrx/app-state';
import { environment } from 'src/environments/environment';
import { SearchService } from './search/search.service';
import { Subscription } from 'rxjs';
import Product from 'src/model/api-response-types/Product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  homeRoute: string = RouteMapper.home
  signInRoute: string = RouteMapper.signIn
  cartRoute: string = RouteMapper.cart
  searchQuery: string = ""
  searchCategory: ProductCategories = ProductCategories.ALL_CATEGORIES
  searchResults: Array<Product> = []
  page: number = 1


  // TODO: Make product categories title case and remove underlines
  productCategories: ReadonlyArray<string> = Object.values(ProductCategories)

  constructor(private store: Store<typeof appState>, private router: Router, public popoverCtrl: PopoverController, private searchService: SearchService) { }

  accountPopoverSignInButtonClicked(){
    this.router.navigateByUrl(RouteMapper.signIn)
    this.popoverCtrl.dismiss()
  }

  updateSearchQuery(event: Event){
    const target = event.target as HTMLTextAreaElement
    this.searchQuery = target.value
    this.store.dispatch(setProductSearchQuery({
      payload: target.value
    }))
  }

  updateSearchCategory(event: Event){
    const target = event as any
    this.searchCategory = target.detail.value
    this.store.dispatch(setProductSearchCategory({
      payload: target.detail.value
    }))
  }

  search(){
    if(this.searchQuery.trim().length == 0){
      return
    }
    const completeUrl: string = environment.backend.endpoints.productSearch({
      query: this.searchQuery, 
      category: this.searchCategory,
      page: this.page,
    })
    const queryParameterString: string = completeUrl.slice(completeUrl.indexOf("?")+1)
    this.router.navigateByUrl(`${RouteMapper.search}?${queryParameterString}`)
    this.store.dispatch(setProductSearchState({
      payload: 'loading'
    }))
    const request = this.searchService.searchProduct$(this.searchQuery, this.searchCategory, this.page).subscribe(val => {
      this.searchResults = val
      this.store.dispatch(setProductSearchState({
        payload: 'success'
      }))
      for(let x = 0; x < this.searchResults.length; x++){
        // TODO: Fetch image for each product
      }
      request.unsubscribe()
    })
  }

}
