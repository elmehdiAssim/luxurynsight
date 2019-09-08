import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsModalComponent } from './news/news-modal/news-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsItemComponent,
    NewsListComponent,
    NewsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
