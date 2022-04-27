import { Component, OnInit } from '@angular/core';
import { View } from '../view';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view: View = {
    name: 'Parth '
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}