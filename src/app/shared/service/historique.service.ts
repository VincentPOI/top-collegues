import { Injectable } from '@angular/core';
import Vote from '../domain/vote'
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class HistoriqueService {

  private historiqueSub: ReplaySubject<Vote> = new ReplaySubject(6);
  private maxId: number = 0;

  get historiqueObs(): Observable<Vote> {
    return this.historiqueSub.asObservable();
  }

  constructor(private http: HttpClient) {

    this.http.get<Vote[]>("http://localhost:3010/top-collegues/votes").subscribe(
      votes => {
        this.maxId = votes.map(vote => vote.id).reduce((a, b) => a > b ? a : b, this.maxId);
        votes.sort((a,b)=>a.id>b.id?1:-1).forEach(vote => this.historiqueSub.next(vote))
      }
    );

    Observable.interval(5000).subscribe(val => {
      this.http.get<Vote[]>(`http://localhost:3010/top-collegues/votes?since=${this.maxId}`).subscribe(
        votes => {
          if (votes.length > 0) {
            this.maxId = votes.map(vote => vote.id).reduce((a, b) => a > b ? a : b, this.maxId);
            votes.sort((a,b)=>a.id>b.id?1:-1).forEach(vote => this.historiqueSub.next(vote));
          }
        },
        error => { }
      )
    });
  }

}
