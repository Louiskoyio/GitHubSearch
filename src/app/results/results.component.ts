import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { SearchService } from '../services/search.service';
import { MyProfileService } from '../services/my-profile.service';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { Myprofile} from '../myprofile';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  users:User[];
  repos:Repo[];

  searchRepo(userQuery: string){
    this.searchService.searchRepos(userQuery).then(
      ()=>{
        this.repos=this.searchService.repos;
      },
      (error)=>{
        console.log(error)
      }
    )
    }



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
