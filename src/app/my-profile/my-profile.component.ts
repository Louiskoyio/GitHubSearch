import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyProfileService } from '../services/my-profile.service';
import { UserReposService } from '../services/user-repos.service'
import { Myprofile} from '../myprofile';
import { Repo } from '../repo';
import { from } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Output() getProfile = new EventEmitter<any>()

  profile:Myprofile[];

  repos:Repo[]=[];

  myUsername="Louiskoyio";

  getMyRepos(myUsername: string){
    this.repoService.getRepos(myUsername).then(
      ()=>{
        this.repos=this.repoService.repos;
      },
      (error)=>{
        console.log(error)
      }
    )
    }


  
  constructor(public repoService:UserReposService) { }

  ngOnInit() {
    this.getMyRepos(this.myUsername);
  }

}
