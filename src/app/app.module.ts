import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './collegues-composants/collegue-composants/un-collegue/un-collegue.component';
import CollegueService from './shared/service/collegue.service';
import { ClassiqueComponent } from './collegues-composants/list-collegues-composants/classique/classique.component';
import { FormulaireAjoutComponent } from './collegues-composants/formulaire-ajout/formulaire-ajout.component';
import { TableauComponent } from './collegues-composants/list-collegues-composants/tableau/tableau.component';
import { CarrouselComponent } from './collegues-composants/list-collegues-composants/carrousel/carrousel.component';
import { BanniereComponent } from './outils-composants/banniere/banniere.component';
import { NotificationBarComponent } from './outils-composants/notification-bar/notification-bar.component';
import { LigneCollegueComponent } from './collegues-composants/collegue-composants/ligne-collegue/ligne-collegue.component';
import { ChoixAffichageComponent } from './outils-composants/choix-affichage/choix-affichage.component';
import { SlideCollegueComponent } from './collegues-composants/collegue-composants/slide-collegue/slide-collegue.component';
import { VueDetailComponent } from './collegues-composants/collegue-composants/vue-detail/vue-detail.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { PseudoPipe } from './shared/pipe/pseudo.pipe';
import { VotreDernierAvisComponent } from './outils-composants/votre-dernier-avis/votre-dernier-avis.component';
import { ConnectionBadgeComponent } from './outils-composants/connection-badge/connection-badge.component';
import { HistoriqueComponent } from './outils-composants/historique/historique.component';
import HistoriqueService from './shared/service/historique.service';
import CommentaireService from './shared/service/commentaire.service';
import { LigneHistoriqueComponent } from './outils-composants/ligne-historique/ligne-historique.component';
import { VoteHistoriquePipe } from './shared/pipe/vote-historique.pipe';
import NotificationService from './shared/service/notification.service';
import { CommentaireModalComponent } from './collegues-composants/commentaire-modal/commentaire-modal.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, 
  { path: 'carrousel', component:CarrouselComponent },
  { path: 'tableau', component:TableauComponent },
  {path:'detail/:pseudo',component:VueDetailComponent},
  { path: '**', redirectTo: 'classique'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    FormulaireAjoutComponent,
    TableauComponent,
    CarrouselComponent,
    BanniereComponent,
    NotificationBarComponent,
    LigneCollegueComponent,
    ChoixAffichageComponent,
    SlideCollegueComponent,
    VueDetailComponent,
    ScorePipe,
    PseudoPipe,
    VotreDernierAvisComponent,
    ConnectionBadgeComponent,
    HistoriqueComponent,
    LigneHistoriqueComponent,
    VoteHistoriquePipe,
    CommentaireModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [CommentaireService, CollegueService, HistoriqueService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [CommentaireModalComponent]

})
export class AppModule { }
