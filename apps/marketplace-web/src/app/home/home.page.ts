import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RouteMapper } from 'src/model/RouteMapper';

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
  public categories: ReadonlyArray<string> = [
    "All Categories",
    "Apparel",
    "Appliances",
    "Beauty",
    "Computers",
    "Electronics",
  ]

  accountPopoverSignInButtonClicked(){
    this.router.navigateByUrl(RouteMapper.signIn)
    this.popoverCtrl.dismiss()
  }

  constructor(private router: Router, public popoverCtrl: PopoverController) {}

}
