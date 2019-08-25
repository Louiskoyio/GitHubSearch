import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class UserReposService {

  repos:Repo[]=[];

  constructor(private http:HttpClient) { }

  getRepos(){
    let searchEndpoint= "https://api.github.com/users/Louiskoyio/repos?accesstoken="+environment.GITHUBACCESSTOKEN;
 

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.repos=[];

            for(let i=0; i<15; i++){
              let name = results[i]["name"];
              let desc = results[i]["description"];
              let repo = new Repo(name,desc);
              this.repos.push(repo);
              i=i+i;
            }
            console.log(this.repos);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;

  }
}
