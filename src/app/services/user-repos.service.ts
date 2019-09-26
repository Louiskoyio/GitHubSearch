import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class UserReposService {

  repos:Repo[]=[];

  constructor(private http:HttpClient) { }

  getRepos(username: string){

    let searchEndpoint= "https://api.github.com/users/"+username+"/repos?accesstoken=0b9be83018547b4c91efebd06462a29fab0a4d07";
 

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.repos=[];

            for(let i=0; i<14; i++){
  
              let name = results[i]["name"];
              let desc = results[i]["description"];
              let url = results[i]["html_url"];
              let repo = new Repo(name,desc,url);
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
