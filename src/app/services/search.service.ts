import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users:User[]=[];
  repos:Repo[]=[];

  constructor(private http:HttpClient) { }

  searchUsers(userQuery:string){

        
    let searchEndpoint= "https://api.github.com/search/users?accesstoken="+environment.GITHUBACCESSTOKEN;
    searchEndpoint += "&q="+userQuery;

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=[];
            for(let i=0; i<results["items"].length; i++){
              let url = results["items"][i]["login"];
              let repos = results["items"][i]["repos_url"];
              let pic = results["items"][i]["avatar_url"];
              let bio = results["items"][i]["bio"];
              let user = new User(url,repos,pic,bio);
              this.users.push(user);
            }
            console.log(this.users);
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

  searchRepos(userQuery:string){

        
    let searchEndpoint= "https://api.github.com/search/repositories?accesstoken="+environment.GITHUBACCESSTOKEN;
    searchEndpoint += "&q="+userQuery;

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=[];
            for(let i=0; i<results["items"].length; i++){
              let name = results["items"][i]["name"];
              let desc = results["items"][i]["description"];
              let link = results["items"][i]["description"];
              let repo = new Repo(name,desc,link);
              this.repos.push(repo);
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
