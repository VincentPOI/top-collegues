import { Injectable } from '@angular/core';
import Collegue from '../domain/collegue'
import ScoreAction, { Action } from '../domain/score-action'
import Vote from '../domain/vote'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do'
import { EtatServeur } from '../domain/etat-serveur.enum'
import NotificationService from './notification.service';
import Notification from '../domain/notification';
@Injectable()
export default class CollegueService {

  private collegueSaveSub: Subject<Collegue> = new Subject();
  private _patchScoreSub: Subject<Vote> = new Subject();
  private _enLigneSub: BehaviorSubject<EtatServeur> = new BehaviorSubject(null);

  public get patchScoreObs(): Observable<Vote> {
    return this._patchScoreSub.asObservable();
  }

  public get enLigneObs(): Observable<EtatServeur> {
    return this._enLigneSub.asObservable();
  }


  constructor(private http: HttpClient, private ns: NotificationService) {
    this.http.get<void>("http://localhost:3010/top-collegues/collegues/enLigne").subscribe(
      () => {
        this._enLigneSub.next(EtatServeur.EN_LIGNE);
      },
      error => {
        this._enLigneSub.next(EtatServeur.HORS_LIGNE);
      }
    );
    Observable.interval(5000).subscribe(val => {
      this.http.get<void>("http://localhost:3010/top-collegues/collegues/enLigne").subscribe(
        () => {
          this._enLigneSub.next(EtatServeur.EN_LIGNE);
        },
        error => {
          this._enLigneSub.next(EtatServeur.HORS_LIGNE);
        }
      );
    });
  }


  listerCollegue(): Observable<Collegue> {
    this.http.get<Collegue[]>("http://localhost:3010/top-collegues/collegues/").subscribe(
      collegues => collegues.forEach(collegue => {
        this.collegueSaveSub.next(collegue);
      })
    );
    return this.collegueSaveSub.asObservable();
  }

  trouverCollegue(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>(`http://localhost:3010/top-collegues/collegues/${pseudo}`);
  }

  sauvegarder(newCollegue: Collegue) {
    this.http.post<Collegue>(
      "http://localhost:3010/top-collegues/collegues/",
      newCollegue,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe(
        collegue => {
          this.collegueSaveSub.next(collegue);
          this.ns.diffuserNotification(new Notification("success", `Le collegue ${newCollegue.pseudo} a bien été ajouté`));
        },
        error => {
          this.ns.diffuserNotification(new Notification("danger", `Le collegue ${newCollegue.pseudo} n'a pas pu être ajouté`));
        });
  }

  aimerUnCollegue(unCollegue: Collegue) {
    let collegueAction = new ScoreAction(Action.AIMER);
    this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(
      collegue => {
        this._patchScoreSub.next(new Vote(collegue, collegueAction));
      },
      error => {
        this.ns.diffuserNotification(new Notification("danger", "Une erreur est survenue"));
      }
    );
  }


  detesterUnCollegue(unCollegue: Collegue) {
    let collegueAction = new ScoreAction(Action.DETESTER);
    this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(
      collegue => {
        this._patchScoreSub.next(new Vote(collegue, collegueAction));
      },
      error => {
        this.ns.diffuserNotification(new Notification("danger", "Une erreur est survenue"));
      }
    );
  }

  supprimerUnCollegue(collegue: Collegue): Observable<any> {
    return this.http.delete(`http://localhost:3010/top-collegues/collegues/${collegue.pseudo}`).do(
      val => {
        this.ns.diffuserNotification(new Notification("success", `Le collegue ${collegue.pseudo} a bien été supprimé`));
      },
      error => {
        this.ns.diffuserNotification(new Notification("danger", `Le collegue ${collegue.pseudo} n'a pas pu être supprimé`));
      }
    );
  }

}
