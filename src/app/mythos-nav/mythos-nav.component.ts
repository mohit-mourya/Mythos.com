import { Component,OnInit ,OnDestroy, Input } from '@angular/core';
import { MediaObserver ,MediaChange } from "@angular/flex-layout";
import {Subscription } from "rxjs";
import { LoginshowService } from '../services/loginshow.service';
@Component({
  selector: 'app-mythos-nav',
  templateUrl: './mythos-nav.component.html',
  styleUrls: ['./mythos-nav.component.css']
})
export class MythosNavComponent implements OnInit ,OnDestroy {
  opened = false;
  @Input() deviceXs:boolean;
  exist:boolean = true

  mediaSub :Subscription;
  constructor(public mediaObserver:MediaObserver,private _loginshow:LoginshowService){
    this._loginshow.exist.subscribe(exist=>{
      this.exist = exist
    })
  }
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result : MediaChange)=> {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs'?true:false;

   })}
   ngOnDestroy(){
     this.mediaSub.unsubscribe();
   }
}
