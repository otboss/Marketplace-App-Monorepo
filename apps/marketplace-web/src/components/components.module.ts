import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListItemComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule,
  ],
  exports: [
    ListItemComponent,
    InputComponent,
  ]
})
export class ComponentsModule { }
