import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './header/searchbar.component';
import { LinkBarComponent } from './header/linkbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LinkBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
