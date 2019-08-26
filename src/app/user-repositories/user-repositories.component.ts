import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserReposService} from '../services/user-repos.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {
  @Output() getProfile = new EventEmitter<any>()

  username: string;
  repos:Repo[]=[];

  onNavigate(repoLink : string){
    let link = repoLink;
    window.open(link, "_blank");
  }

  getUserRepos(username: string){
    this.repoService.getRepos(this.username).then(
      ()=>{
        this.repos=this.repoService.repos;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

  constructor(private route: ActivatedRoute, public repoService:UserReposService,private http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.username=params.get('link');

    });
    this.getUserRepos(this.username);
    
  } 
  }

