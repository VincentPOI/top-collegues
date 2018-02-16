import { Injectable } from '@angular/core';
import Collegue from '../domain/collegue'
import CollegueAction, { Action } from '../domain/collegue-action'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export default class CollegueService {

  constructor(private http: HttpClient) { }


  listerCollegue(): Promise<Collegue[]> {
    return this.http.get<Collegue[]>("http://localhost:3010/top-collegues/collegues/").toPromise();
  }

  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http.post<Collegue>(
      "http://localhost:3010/top-collegues/collegues/",
      newCollegue,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      })
      .toPromise();
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    let collegueAction = new CollegueAction(Action.AIMER);
    return this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).toPromise();
  }


  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    let collegueAction = new CollegueAction(Action.DETESTER);
    return this.http.patch<Collegue>(`http://localhost:3010/top-collegues/collegues/${unCollegue.pseudo}`,
      collegueAction,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).toPromise();
  }

  supprimerUnCollegue(collegue:Collegue):Promise<any>{
    return this.http.delete(`http://localhost:3010/top-collegues/collegues/${collegue.pseudo}`).toPromise();
  }

}
