import { Component, OnInit } from '@angular/core';
import NotificationService from '../../shared/service/notification.service';
import  Notification from '../../shared/domain/notification';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {

  notification:Notification = null
  

  constructor(private ns : NotificationService) {
    this.ns.notificationsObs.subscribe(notif=>{
      this.notification = notif;
    });
    debounceTime.call(this.ns.notificationsObs, 10000).subscribe(() => this.notification = null);

  }

  ngOnInit() {
  }

}
