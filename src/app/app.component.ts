import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import Collegue from './shared/domain/collegue'
import CollegueService from './shared/service/collegue.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formulaireAffiche: boolean = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.formulaireAffiche = !(event.url.startsWith("/detail/"));
      }
    })
  }





}
