import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()

  userQuery:string;
  constructor() { }

  search(){
    this.emitSearch.emit(this.userQuery);
  }

  ngOnInit() {
  }

}
