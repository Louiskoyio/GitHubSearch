import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()
  @Output() emitSearch2 = new EventEmitter<any>()


  userQuery:string;
  constructor() { }

  search(){
    this.emitSearch.emit(this.userQuery);
  }
  search2(){
    this.emitSearch2.emit(this.userQuery);
  }

  ngOnInit() {
  }

}
