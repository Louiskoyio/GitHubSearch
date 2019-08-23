import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { User } from '../user';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  users:User[];
	searchUser(userQuery: string){
    this.searchService.searchUsers(userQuery).then(
      ()=>{
        this.users=this.searchService.users;
      },
      (error)=>{
        console.log(error)
      }
    )
    }
  constructor(public searchService:SearchService) { }



  ngOnInit() {


  }



}
