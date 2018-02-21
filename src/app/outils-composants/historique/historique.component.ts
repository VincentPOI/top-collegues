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






  constructor(private hs: HistoriqueService) {
  }

  ngOnInit() {
    this.hs.historiqueObs.subscribe(
      vote => {
        console.log(vote.id, vote.collegue.pseudo);
        this.votes.unshift(vote);
      }
    );
  }

  supprimer(vote: Vote) {
    console.log("HistoriqueComponent", "supprimer", vote.id);
    this.votes = this.votes.filter(v => v.id != vote.id);
  }

}
