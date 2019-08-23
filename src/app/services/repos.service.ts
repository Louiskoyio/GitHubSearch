import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  repos:Repo[]=[];

  constructor(private http:HttpClient) { }

  searchrepos(userQuery:string){

        
    let searchEndpoint= "https://api.github.com/search/repositories?accesstoken="+environment.GITHUBACCESSTOKEN;
    searchEndpoint += "&q="+userQuery;

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.repos=[];
            for(let i=0; i<results["items"].length; i++){
              let name = results["items"][i]["name"];
              let description = results["items"][i]["description"];
              let repo = new Repo(name,description);
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
