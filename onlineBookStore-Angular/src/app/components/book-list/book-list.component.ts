import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  books: Book[];
  categoryId: number;

  constructor(private bookService: BookService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.getListBooks();
    })
  }

  getListBooks(){
    const hasSearchKeyword: boolean = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (hasSearchKeyword) {
      this.getListBookByKeywordSearch();
    } else {
      this.getListBooksByCategory();
    }
  }

  getListBooksByCategory(){
    const hasCategoryId : Boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.categoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.categoryId = 1;
    }

    this.bookService.getBooks(this.categoryId).subscribe(
      data => {
        this.books = data;
          }
    )
  }

  getListBookByKeywordSearch(){
    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');
    this.bookService.searchBooks(keyword).subscribe(
      data => {
        this.books = data;
      }
    )

  }


}
