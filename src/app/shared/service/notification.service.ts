import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import  Notification from '../domain/notification';
import { Observable } from 'rxjs';

@Injectable()
export default class NotificationService {

  private _notifObs: Subject<Notification> = new Subject();


  
  public get notificationsObs() : Observable<Notification> {
    return this._notifObs.asObservable();
  }
  


  constructor() { }


  diffuserNotification(notication:Notification){
    this._notifObs.next(notication);
  }

}
