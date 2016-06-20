import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // not forget: HTTP_PROVIDERS
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

export class Book {
  constructor(public title: string,
              public description: string,
              public rating: number = 0) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [MD_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class AppComponent implements OnInit {
  title: string = 'DWX app works!';
  books: Book[];

    constructor(private http: Http) { }

    ngOnInit() {
      this.http
        .get('http://book-monkey2-api.angular2buch.de/books')
        .subscribe(response => {
          this.books = response.json();
        });
    }
}
