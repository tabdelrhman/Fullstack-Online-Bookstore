import { DetailedBookInfoComponent } from './components/detailed-book-info/detailed-book-info.component';
import { SearchComponent } from './components/search/search.component';
import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { FooterComponent } from './components/footer/footer.component';
//import { Route } from '@angular/compiler/src/core';

const routes:Routes =[
  {path:'books' , component: BookListComponent},
  {path:'search/:keyword' , component: BookListComponent},
  {path:'category/:id' , component: BookListComponent},
  {path:'books/:id' , component: DetailedBookInfoComponent},
  {path:'' , redirectTo:'books' ,pathMatch: 'full'},
  {path:"**" , component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    DetailedBookInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
