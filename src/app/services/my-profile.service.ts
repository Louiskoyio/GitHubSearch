import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from'@angular/common/http';
import { Myprofile } from '../myprofile';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  profile:Myprofile[]=[];

  constructor(private http:HttpClient) { }

  getProfile(){

        
    let searchEndpoint= "https://api.github.com/users/Louiskoyio?accesstoken=0b9be83018547b4c91efebd06462a29fab0a4d07";
 

    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (result)=>{
            this.profile=[];
          
              let login = result["login"];
              let repos = result["repos_url"];
              let myprofile = new Myprofile(login,repos);
              this.profile.push(myprofile);
            
            console.log(this.profile);
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
