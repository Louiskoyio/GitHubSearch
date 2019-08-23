import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService} from '../services/repos.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {

  repo_link: string;
  repos:Repo[];
  searchRepo(repo_link: string){
    this.reposService.searchRepos(repo_link).then(
      ()=>{
        this.repos=this.reposService.repos;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

  constructor(private route: ActivatedRoute, public reposService:ReposService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.repo_link=params.get('link');

    });

    this.searchRepo('https://api.github.com/users/Louiskoyio/repos');
    
    
  }

}
