import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipiesComponent } from './receipies/receipies.component';
import { ReceipieListComponent } from './receipies/receipie-list/receipie-list.component';
import { ReceipieDetailsComponent } from './receipies/receipie-details/receipie-details.component';
import { ReceipieItemComponent } from './receipies/receipie-item/receipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipiesComponent,
    ReceipieListComponent,
    ReceipieDetailsComponent,
    ReceipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
