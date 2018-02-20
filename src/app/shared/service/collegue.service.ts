import { Injectable } from '@angular/core';
import Collegue from '../domain/collegue'
import ScoreAction, { Action } from '../domain/score-action'
import CollegueScoreAction from '../domain/collegue-score-action'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do'

@Injectable()
export default class CollegueService {

  private collegueSaveSub: Subject<Collegue> = new Subject();
  private _patchScoreSub: Subject<CollegueScoreAction> = new Subject();


  public get patchScoreObs(): Observable<CollegueScoreAction> {
    return this._patchScoreSub.asObservable();
  }


  constructor(private http: HttpClient) { }


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
      }).subscribe(collegue => {
        this.collegueSaveSub.next(collegue);
      });
  }

  aimerUnCollegue(unCollegue: Collegue) {
    let collegueAction = new ScoreAction(Action.AIMER);
    this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(collegue => {
      this._patchScoreSub.next(new CollegueScoreAction(collegue, collegueAction));
    });
  }


  detesterUnCollegue(unCollegue: Collegue) {
    let collegueAction = new ScoreAction(Action.DETESTER);
    this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).subscribe(collegue => {
      this._patchScoreSub.next(new CollegueScoreAction(collegue, collegueAction));
    });
  }

  supprimerUnCollegue(collegue: Collegue): Observable<any> {
    return this.http.delete(`http://localhost:3010/top-collegues/collegues/${collegue.pseudo}`);
  }

}
