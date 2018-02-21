import { Component, OnInit, Input } from '@angular/core';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import CollegueService from '../../../shared/service/collegue.service';


@Component({
  selector: 'app-slide-collegue',
  templateUrl: './slide-collegue.component.html',
  styleUrls: ['./slide-collegue.component.css']
})
export class SlideCollegueComponent extends AbstractBaseCollegue implements OnInit {
  @Input() hauteur: number;

  constructor(public cs: CollegueService) {
    super(cs);
   }

  ngOnInit() {
    super.init();
  }


  


}
