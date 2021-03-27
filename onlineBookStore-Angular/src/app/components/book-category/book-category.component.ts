import { Component, OnInit } from '@angular/core';
import { BookCategory } from './../../common/book-category';
import { BookService } from './../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  booksCategory: BookCategory[];

  constructor(private bookService: BookService) { }

ngOnInit(): void {
this.getBooksCategory();
}

  getBooksCategory(){
    this.bookService.getBooksCategory().subscribe(
      data => {
        this.booksCategory = data;
      }
    )
  }

}
