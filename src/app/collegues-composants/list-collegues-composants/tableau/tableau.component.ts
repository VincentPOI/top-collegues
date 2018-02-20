import { Component, OnInit } from '@angular/core';
import AbstractBaseListCollegue from '../AbstractBaseListCollegues'
import CollegueService from '../../../shared/service/collegue.service'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends AbstractBaseListCollegue implements OnInit {

  constructor(cs: CollegueService) {
    super(cs)
   }


  ngOnInit() {
    super.init()
  }

}
