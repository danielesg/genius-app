import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './header/searchbar.component';
import { LinkBarComponent } from './header/linkbar.component';
import { SubNewsCardComponent } from './cards-news/subnewscard.component';
import { MainNewsCardComponent } from './cards-news/mainnewscard.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsLayoutComponent } from './path-charts/charts.layout.component';
import { FeaturedLayoutComponent } from './path-news/featured.layout.component';
import { VideosLayoutComponent } from './path-videos/videos.layout.component';
import { ShopLayoutComponent } from './path-shop/shop.layout.component';
import { ExampleArticle } from './path-articles/example.article';
import { ExampleSong } from './path-songs/example.song';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LinkBarComponent,
    SubNewsCardComponent,
    MainNewsCardComponent,
    ChartsLayoutComponent,
    FeaturedLayoutComponent,
    VideosLayoutComponent,
    ShopLayoutComponent,
    ExampleArticle,
    ExampleSong
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
