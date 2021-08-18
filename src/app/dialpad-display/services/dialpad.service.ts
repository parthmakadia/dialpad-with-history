import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialpadService {

  keyPressDateArr: any[] = [];

  keyPressDateArrSub: BehaviorSubject<any[]> = new BehaviorSubject([]);
  keyPressDateArr$ = this.keyPressDateArrSub.asObservable();

  constructor() { }

  addKeyPressDateObj(keyPressDateObj: any) {
    this.keyPressDateArr.push(keyPressDateObj);
    sessionStorage.setItem('keyPressDateArr', JSON.stringify(this.keyPressDateArr));
    this.keyPressDateArrSub.next(this.keyPressDateArr);
  }
}
