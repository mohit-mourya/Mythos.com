import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { user } from "../user";
import { UserService } from "../user.service";
import { MatAccordion } from '@angular/material/expansion';
import { LoginshowService } from '../services/loginshow.service';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  //subject
  exist:boolean;
  username:string = 'Mythos';
  ngOnInit(): void {
    this.exist = false
    this._loginshow.exist.subscribe((res)=>{
      this.exist = res
    })
  }
  @ViewChild(MatAccordion) accordion: MatAccordion;


  options: FormGroup;
  signup_group: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  passwordFormControl = new FormControl();
  addresscontrol = new FormControl();
  fnamecontrol = new FormControl();
  lastcontrol = new FormControl();
  phonecontrol = new FormControl();
  data = new user();

  constructor(fb: FormBuilder,private userservice:UserService, private _loginshow: LoginshowService) {
    this._loginshow.username.subscribe(uname=>{
      console.log('login component before subscribe',this.username)
      this.username = uname
      console.log('login component after subscribe',this.username)
    })
    this.signup_group = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      password: this.passwordFormControl,
      first: this.fnamecontrol,
      last: this.lastcontrol,
      contact: this.passwordFormControl,
      email: this.emailFormControl,
      address: this.addresscontrol
    });
  }

    form: any


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
  postdata(signup_group:FormGroup){
    this.data.first_name = signup_group.controls.first.value;
    this.data.last_name = signup_group.controls.last.value;
    this.data.address = signup_group.controls.address.value;
    this.data.contact = signup_group.controls.contact.value;
    this.data.email = signup_group.controls.email.value;
    this.data.password = signup_group.controls.password.value;
  }

  //create user
  create(signup_group:FormGroup){
    this.postdata(signup_group);
    this.userservice.adduser(this.data)
    .subscribe((next)=>{
      alert('sign_up successful')
    },
    (error)=>{
      alert('error occured'+error.error.text);
    }
    )
  }

  //login
  login(signup_group:FormGroup){
    this.postdata(signup_group);
    this.userservice.getuserby(this.data.email,this.data.password)
    .subscribe((next)=>{
      alert('hii '+next[0].first_name+" welcome to Mythos world")
      this.data = next[0]
      this._loginshow.username.next(this.data.first_name)
      this._loginshow.exist.next(true)
    },
    (error)=>{
      alert("error occured "+error.error.text)
      this._loginshow.exist.next(false)
    })
  }
}
