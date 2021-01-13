import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { LoginshowService } from '../services/loginshow.service';

@Component({
  selector: 'app-slide-bar-data',
  templateUrl: './slide-bar-data.component.html',
  styleUrls: ['./slide-bar-data.component.css']
})
export class SlideBarDataComponent implements OnInit {
  username: string 
  _loginshow = new LoginshowService()

  constructor() {
    this._loginshow.username.subscribe(name=>{
      console.log('Name = ',name)
      console.log('before subscribe slidebar component',this.username)
      this.username = name
      console.log('After subscribe slidebar component',this.username)
    })
  }
  ngOnInit(): void {
  }
}
