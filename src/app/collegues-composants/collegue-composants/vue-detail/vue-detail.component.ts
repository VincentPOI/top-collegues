import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CollegueService from '../../../shared/service/collegue.service';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import Collegue from '../../../shared/domain/collegue';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends AbstractBaseCollegue implements OnInit {
  hauteurImage: number;

  constructor(public cs: CollegueService, private route: ActivatedRoute, private router: Router, private location : Location) {
    super(cs);
    this.collegue= new Collegue("", "", 0);
    this.route.params.subscribe(params => {
      this.cs.trouverCollegue(params['pseudo'])
        .subscribe(collegue => this.collegue = collegue);
    });
  }


  ngOnInit() {
    super.init();
  }

  supprimer() {
    this.cs.supprimerUnCollegue(this.collegue);
    this.router.navigate(['/classiqe']);
  }


  tailler(img: HTMLImageElement) {
    this.hauteurImage = img.width;
  }


  retourListe(){
    this.location.back();
  }

}