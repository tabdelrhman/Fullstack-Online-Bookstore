import { Book } from './../common/book';
import { BookCategory } from './../common/book-category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8081/api/v1/books" ;
  private categoryUrl = "http://localhost:8081/api/v1/book-category" ;

  constructor(private httpClient: HttpClient) { }

  getBooks(categoryId: number): Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/categoryId?id=${categoryId}`;
  return this.getListBooks(searchUrl)
  }

  searchBooks(keyword: string): Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/searchKeyword?name=${keyword}`;
  return this.getListBooks(searchUrl)
  }

  private getListBooks(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
  }

  getBooksCategory(): Observable<BookCategory[]>{
  return this.httpClient.get<GetResponseBooksCategory>(this.categoryUrl).pipe(
    map( response => response._embedded.bookCategory)
  )
  }

  getBookDetails(id : string): Observable<Book>{
    return this.httpClient.get<Book>(this.baseUrl+`/${id}`);
    
    }



}

interface GetResponseBooks{

  _embedded:{
      books: Book[];
  }
}

interface GetResponseBooksCategory{

  _embedded:{
    bookCategory: BookCategory[];
  }
}

