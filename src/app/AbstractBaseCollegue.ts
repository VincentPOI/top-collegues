import { Input, Output, EventEmitter } from '@angular/core';
import Collegue from './shared/domain/collegue';
import CollegueService from './shared/service/collegue.service';



export default abstract class AbstractBaseCollegue {
    @Input() collegue: Collegue;
    @Output() majScore: EventEmitter<void> = new EventEmitter<void>()
    @Output() suppr: EventEmitter<Collegue> = new EventEmitter<Collegue>()
    cs: CollegueService
    constructor(cs: CollegueService) {
        this.cs = cs;
    }

    supprimer() {
        this.suppr.emit(this.collegue);
    }
    jaime() {
        this.cs.aimerUnCollegue(this.collegue).then(collegue => { this.collegue.score = collegue.score; this.majScore.emit(); });
    }
    jedeteste() {
        this.cs.detesterUnCollegue(this.collegue).then(collegue => { this.collegue.score = collegue.score; this.majScore.emit(); });
    }
    sourcer(img: HTMLImageElement) {
        //TODO à changer pour mettre une ressource local, pas trop important pour l'instant
        img.src = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
    }
}