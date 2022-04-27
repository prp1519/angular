import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AUTHOR } from '../mock-author';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author = AUTHOR;
  constructor() { }

  ngOnInit(): void {
  }

}
