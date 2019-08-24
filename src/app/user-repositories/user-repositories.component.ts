import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReposService} from '../services/repos.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {

  username: string;
  repo:Repo;

  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.username=params.get('link');

    });
    
    interface ApiResponse{
      name:string;
      description:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Louiskoyio").subscribe(data=>{
      // Succesful API request
      this.repo = new Repo(data.name, data.description)
    })
  } 
  }

