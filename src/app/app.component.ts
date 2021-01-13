import { Component ,OnInit} from '@angular/core';
import { Http,Response,Headers,RequestOptions } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 id :any;
 name:string;
 address:string;
 errorMessage :any;
 showFiller = false;
 deviceXs:boolean;
 deviceMd:boolean;
 deviceLg:boolean;
 deviceSm:boolean;

 constructor(){}
 Repdata;
 valbutton ="Save";

 ngOnInit(){

}
  title = 'Mythos1';
}
