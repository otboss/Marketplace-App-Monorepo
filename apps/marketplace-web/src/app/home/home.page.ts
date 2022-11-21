import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RouteMapper } from 'src/model/RouteMapper';
import ProductCategories from 'src/model/ProductCategories';
import { Store } from '@ngrx/store';
import { setProductSearchCategory, setProductSearchQuery } from 'src/ngrx/product-search-store/product-search-actions';
import appState from 'src/ngrx/app-state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  homeRoute: string = RouteMapper.home
  signInRoute: string = RouteMapper.signIn
  cartRoute: string = RouteMapper.cart

  // TODO: Get Categories from the server and populate this list
  // public categories: ReadonlyArray<string> = ItemCategories.map(d)

  productCategories: ReadonlyArray<string> = Object.values(ProductCategories)

  constructor(private store: Store<typeof appState>, private router: Router, public popoverCtrl: PopoverController) {}

  accountPopoverSignInButtonClicked(){
    this.router.navigateByUrl(RouteMapper.signIn)
    this.popoverCtrl.dismiss()
  }

  updateSearchQuery(event: Event){
    const target = event.target as HTMLTextAreaElement
    this.store.dispatch(setProductSearchQuery({
      payload: target.value
    }))
  }

  updateSearchCategory(event: Event){
    const target = event as any
    this.store.dispatch(setProductSearchCategory({
      payload: target.detail.value
    }))
  }
}
