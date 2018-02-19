import { Component, OnInit } from '@angular/core';
import CollegueService from '../shared/service/collegue.service';
import AbstractBaseCollegue from '../AbstractBaseCollegue';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent extends AbstractBaseCollegue implements OnInit {
  hauteurImage: number;

  constructor(public cs: CollegueService) {
    super(cs);
   }


  ngOnInit() {
  }

  tailler(img: HTMLImageElement){
    this.hauteurImage = img.width;
  }

}