import { Input, Output, EventEmitter } from '@angular/core';
import Collegue from '../../shared/domain/collegue';
import CollegueService from '../../shared/service/collegue.service';
import { EtatServeur } from '../../shared/domain/etat-serveur.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireModalComponent } from '../commentaire-modal/commentaire-modal.component';
import Commentaire from '../../shared/domain/commentaire';
import CommentaireService from '../../shared/service/commentaire.service'


export default abstract class AbstractBaseCollegue {
    @Input() collegue: Collegue;
    @Output() suppr: EventEmitter<Collegue> = new EventEmitter<Collegue>();
    cs: CollegueService;
    ms: NgbModal;
    comS : CommentaireService;
    inactif: boolean = true;
    constructor(cs: CollegueService, ms: NgbModal,  comS : CommentaireService) {
        this.cs = cs;
        this.ms = ms;
        this.comS = comS;
    }

    init() {
        this.cs.patchScoreObs.subscribe(vote => {
            if (vote.collegue.pseudo == this.collegue.pseudo) {
                this.collegue.score = vote.collegue.score;
            }
        });

        this.cs.enLigneObs.subscribe(etat => {
            switch (etat) {
                case EtatServeur.EN_LIGNE:
                    this.inactif = false;
                    break;
                case EtatServeur.HORS_LIGNE:
                    this.inactif = true;
                    break;
            }
        });
    }

    commentaireModal() {
        const modalRef = this.ms.open(CommentaireModalComponent);
        modalRef.componentInstance.commentaire = new Commentaire(this.collegue, "");
        modalRef.componentInstance.comS = this.comS;
    }

    supprimer() {
        this.suppr.emit(this.collegue);
    }
    jaime() {
        this.cs.aimerUnCollegue(this.collegue);
    }
    jedeteste() {
        this.cs.detesterUnCollegue(this.collegue);
    }
    sourcer(img: HTMLImageElement) {
        //TODO à changer pour mettre une ressource local, pas trop important pour l'instant
        img.src = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
    }
}