import { Injectable } from '@angular/core';
import Commentaire from '../domain/commentaire'
import NotificationService from './notification.service';
import Notification from '../domain/notification';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Collegue from '../domain/collegue'
import { Subject } from 'rxjs/Subject';


@Injectable()
export default class CommentaireService {


  private commentaireSaveSub: Subject<Commentaire> = new Subject();


  constructor(private http: HttpClient, private ns: NotificationService) {
  }


  listerCommentaire(collegue: Collegue): Observable<Commentaire> {
    console.log("COMMENTAIRE SERVICE", collegue);
    this.http.get<Commentaire[]>(`http://localhost:3010/top-collegues/commentaires/${collegue.pseudo}`).subscribe(
      commentaires => {
        commentaires.forEach(commentaire => {
          this.commentaireSaveSub.next(commentaire);
        });
      }
    );
    return this.commentaireSaveSub;
  }

  sauvegarder(commentaire: Commentaire) {
    this.http.post<Commentaire>(
      "http://localhost:3010/top-collegues/commentaires/",
      commentaire,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(
      com => {
        this.commentaireSaveSub.next(com);
        this.ns.diffuserNotification(new Notification("success", `Le commentaire sur ${com.collegue.pseudo} a bien été posté`));
      },
      error => {
        this.ns.diffuserNotification(new Notification("danger", `Le commentaire n'a pas pu être posté`));
      }
    );
  }
}
