import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import CollegueService from './shared/service/collegue.service';
import { ClassiqueComponent } from './classique/classique.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { BanniereComponent } from './banniere/banniere.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { LigneCollegueComponent } from './ligne-collegue/ligne-collegue.component';
import { ChoixAffichageComponent } from './choix-affichage/choix-affichage.component';
import { SlideCollegueComponent } from './slide-collegue/slide-collegue.component';
import { VueDetailComponent } from './vue-detail/vue-detail.component';


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
    VueDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
