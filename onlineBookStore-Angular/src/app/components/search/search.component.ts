import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchBooks(keyword: string){
    this._router.navigateByUrl('search/'+keyword);

  }
}
