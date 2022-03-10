import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './header/searchbar.component';
import { LinkBarComponent } from './header/linkbar.component';
import { SubNewsCardComponent } from './news/subnewscard.component';
import { MainNewsCardComponent } from './news/mainnewscard.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsLayoutComponent } from './charts/chartslayout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LinkBarComponent,
    SubNewsCardComponent,
    MainNewsCardComponent,
    ChartsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
