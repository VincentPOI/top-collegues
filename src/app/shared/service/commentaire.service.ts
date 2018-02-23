import { Injectable } from '@angular/core';
import Commentaire from '../domain/commentaire'
import NotificationService from './notification.service';
import Notification from '../domain/notification';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export default class CommentaireService {

  constructor(private http: HttpClient, private ns: NotificationService) {
  }


  sauvegarder(commentaire: Commentaire) {
    this.http.post<Commentaire>(
      "http://localhost:3010/top-collegues/commentaires/",
      commentaire,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe(
        com => {
          this.ns.diffuserNotification(new Notification("success", `Le commentaire sur ${com.collegue.pseudo} a bien été posté`));
        },
        error => {
          this.ns.diffuserNotification(new Notification("danger", `Le commentaire n'a pas pu être posté`));
        });
  }
}
