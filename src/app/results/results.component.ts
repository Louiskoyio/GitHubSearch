import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  users:User[];

  constructor(public searchService:SearchService) { }

  ngOnInit() {
    this.searchUser("Louiskoyio");
  }


	searchUser(userQuery){
    this.searchService.searchUsers(userQuery).then(
      ()=>{
        this.users=this.searchService.users;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

}
