import { Injectable } from '@angular/core';
import Collegue from '../domain/collegue'
import CollegueAction, { Action } from '../domain/collegue-action'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export default class CollegueService {

  private collegueSaveSub: Subject<Collegue> = new Subject();

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

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    this.http.post<Collegue>(
      "http://localhost:3010/top-collegues/collegues/",
      newCollegue,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe(collegue => {
        this.collegueSaveSub.next(collegue);
      });
    return this.collegueSaveSub.asObservable();
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    let collegueAction = new CollegueAction(Action.AIMER);
    return this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    );
  }


  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    let collegueAction = new CollegueAction(Action.DETESTER);
    return this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    );
  }

  supprimerUnCollegue(collegue: Collegue): Observable<any> {
    return this.http.delete(`http://localhost:3010/top-collegues/collegues/${collegue.pseudo}`);
  }

}
