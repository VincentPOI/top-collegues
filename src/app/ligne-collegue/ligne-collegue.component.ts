import { Component, OnInit } from '@angular/core';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import CollegueService from '../shared/service/collegue.service';

@Component({
  selector: '[app-ligne-collegue]',
  templateUrl: './ligne-collegue.component.html',
  styleUrls: ['./ligne-collegue.component.css']
})
export class LigneCollegueComponent extends AbstractBaseCollegue implements OnInit {
  hauteurImage: number;

  constructor(cs: CollegueService) {
    super(cs);
   }

  ngOnInit() {
    super.init();
  }

  tailler(img: HTMLImageElement){
    this.hauteurImage = img.width;
  }

}
