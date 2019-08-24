import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyProfileService } from '../services/my-profile.service';
import { Myprofile} from '../myprofile';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Output() getProfile = new EventEmitter<any>()

  profile:Myprofile[];


  getMyProfile(){
    this.myProfileService.getProfile().then(
      ()=>{
        this.profile=this.myProfileService.profile;
      },
      (error)=>{
        console.log(error)
      }
    )
    }


  
  constructor(public myProfileService:MyProfileService) { }

  ngOnInit() {
    this.getMyProfile();
  }

}
