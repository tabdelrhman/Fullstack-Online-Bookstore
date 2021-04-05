import { Book } from './../../common/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-book-info',
  templateUrl: './detailed-book-info.component.html',
  styleUrls: ['./detailed-book-info.component.css']
})
export class DetailedBookInfoComponent implements OnInit {

  book : Book;
  constructor(private BookService: BookService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(){
    const hasId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if (hasId) {
      const id: string = this._activatedRoute.snapshot.paramMap.get('id');
      this.BookService.getBookDetails(id).subscribe(
        data => {
          this.book = data;
        }
      )
    } else {
      
    }
  }
}
