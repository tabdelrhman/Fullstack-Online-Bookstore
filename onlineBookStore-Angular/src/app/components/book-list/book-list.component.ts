import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks(){
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
          }
    )
  }

}
