import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginshowService {

  //subject
  exist = new Subject<boolean>()
  username = new Subject<string>()
}
