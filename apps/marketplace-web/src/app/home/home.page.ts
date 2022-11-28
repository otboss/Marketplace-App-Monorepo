import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RouteMapper } from 'src/model/RouteMapper';
import { Store } from '@ngrx/store';
import { setProductSearchCategory, setProductSearchQuery, setProductSearchResult, setProductSearchResultImages, setProductSearchState } from 'src/ngrx/product-search-store/product-search-actions';
import { environment } from 'src/environments/environment';
import { SearchService } from './search/search.service';
import { Observable, Subscription } from 'rxjs';
import { selectProductSearchState } from 'src/ngrx/product-search-store/product-search-selectors';
import { CookieService } from 'ngx-cookie-service';
import { CookieFields } from 'src/model/CookieFields';
import ProductCategories from 'src/model/ProductCategories';
import appState from 'src/ngrx/app-state';
import productSearchResponse from 'src/model/mock-api-responses/product-search-response';
import AsyncState from 'src/model/AsyncState';
import Payload from 'src/model/Payload';
import jwt_decode from "jwt-decode"
import AuthToken from 'src/model/AuthToken';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  searchState$: Observable<Payload<AsyncState>>
  
  homeRoute: string = RouteMapper.home
  signInRoute: string = RouteMapper.signIn
  cartRoute: string = RouteMapper.cart
  searchQuery: string = ""
  searchCategory: ProductCategories = ProductCategories.ALL_CATEGORIES
  page: number = 1
  searchState: AsyncState = "success"

  subscriptions: Array<Subscription> = []

   toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  productCategories: ReadonlyArray<string> = Object.values(ProductCategories)

  constructor(private store: Store<typeof appState>, private router: Router, public popoverCtrl: PopoverController, private searchService: SearchService, private cookieService: CookieService) { 
    this.searchState$ = this.store.select(selectProductSearchState)
  }

  ngOnInit(){
    this.subscriptions = [
      this.searchState$.subscribe(val => this.searchState = val.payload)
    ]
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }


  getToken(): AuthToken | null {
    if(this.cookieService.get(CookieFields.authToken) == null || this.cookieService.get(CookieFields.authToken) == ""){
      return null
    }
    return jwt_decode(this.cookieService.get(CookieFields.authToken)) as AuthToken
  }

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

  async search(){
    if(this.searchQuery.trim().length == 0 || this.searchState === "loading"){
      return
    }
    this.store.dispatch(setProductSearchState({
      payload: 'loading'
    }))    
    const completeUrl: string = environment.backend.endpoints.productSearch({
      query: this.searchQuery, 
      category: this.searchCategory,
      page: this.page,
    })
    const queryParameterString: string = completeUrl.slice(completeUrl.indexOf("?")+1)
    this.router.navigateByUrl(`${RouteMapper.search}?${queryParameterString}`)
    // TODO: Implement error handling

     const searchResults: typeof productSearchResponse = await new Promise((resolve, reject)  => {
      const request = this.searchService.searchProduct$(this.searchQuery, this.searchCategory, 1, 1).subscribe(async searchResults => {
        this.store.dispatch(setProductSearchResult({
          payload: searchResults
        }))
  
        request.unsubscribe()
        resolve(searchResults)
      })
    })

    await new Promise((resolve, reject) => {
      const imageRequest: Subscription = this.searchService.searchProductImages$(searchResults.map(product => product.id), 1).subscribe(images => {
            this.store.dispatch(setProductSearchResultImages({
              payload: images
            }))            
            imageRequest.unsubscribe()
            resolve(null)
      })
    })

    this.store.dispatch(setProductSearchState({
      payload: 'success'
    }))  
  }

  handleSignOut(){
    this.cookieService.delete(CookieFields.authToken)
    this.router.navigateByUrl(RouteMapper.signIn)
    this.popoverCtrl.dismiss()
  }

}
