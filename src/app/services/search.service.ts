import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users:User[]=[];

  constructor(private http:HttpClient) { }

  searchUsers(userQuery:string){

        
    let searchEndpoint= "https://api.github.com/search/users?accesstoken="+environment.GITHUBACCESSTOKEN;
    searchEndpoint += "&q="+userQuery;

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=[];
            for(let i=0; i<results["items"].length; i++){
              let url = results["items"][i]["url"];
              let repos = results["items"][i]["repos_url"];
              let user = new User(url,repos);
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
}
