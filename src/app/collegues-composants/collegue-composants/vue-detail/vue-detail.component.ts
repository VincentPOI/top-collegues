import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CollegueService from '../../../shared/service/collegue.service';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import Collegue from '../../../shared/domain/collegue';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import CommentaireService from '../../../shared/service/commentaire.service';
import Commentaire from '../../../shared/domain/commentaire';
import NotificationService from '../../../shared/service/notification.service';
import Notification from '../../../shared/domain/notification';

@Component({
  selector: 'app-vue-detail',
  templateUrl: './vue-detail.component.html',
  styleUrls: ['./vue-detail.component.css']
})
export class VueDetailComponent extends AbstractBaseCollegue implements OnInit {
  hauteurImage: number;
  constructor(
    public cs: CollegueService,
    public comS: CommentaireService,
    public ns: NotificationService,
    public ms: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    super(cs, ms, comS);
    this.collegue = new Collegue("", "",0);
    this.route.params.subscribe(params => {
      this.cs.trouverCollegue(params['pseudo'])
        .subscribe(collegue => {
          this.collegue = collegue;
          this.comS.listerCommentaire(this.collegue).subscribe(
            commentaire => {
              this.commentaires.push(commentaire);
            },
            error => {
              this.ns.diffuserNotification(new Notification("danger", "Les commentaires n'ont pas pu être récupérés pour ce collègue"))
            }
          );
        });
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


  retourListe() {
    this.location.back();
  }

}