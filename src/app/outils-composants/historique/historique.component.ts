import { Component, OnInit } from '@angular/core';
import HistoriqueService from '../../shared/service/historique.service';
import Vote from '../../shared/domain/vote';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  private votes: Vote[] = [];
  private corbeilleHistorique:number[];
  constructor(private hs: HistoriqueService) {
    this.corbeilleHistorique = JSON.parse(localStorage.getItem("corbeilleHistorique"));
    if(this.corbeilleHistorique==null || this.corbeilleHistorique == undefined){
      this.corbeilleHistorique = [];
    }
    console.log("corbeille", this.corbeilleHistorique);
  }

  ngOnInit() {
    this.hs.historiqueObs.subscribe(
      vote => {
        if(!this.corbeilleHistorique.some(id => id==vote.id)){
          this.votes.unshift(vote);
        }
      }
    );
  }

  supprimer(vote: Vote) {
    this.votes = this.votes.filter(v => v.id != vote.id);
    this.corbeilleHistorique.push(vote.id);
    this.corbeilleHistorique.sort();
    this.corbeilleHistorique = this.corbeilleHistorique.reverse().slice(0,6);
    localStorage.setItem("corbeilleHistorique", JSON.stringify(this.corbeilleHistorique));
  }

}
