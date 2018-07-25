import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

import {fortunes} from './fortunes';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.css'],
  animations: [trigger(
    'imageAnimation',
    [transition('* => *', animate(1000, keyframes([
      style({transform: 'rotate(0deg)'}),
      style({transform: 'rotate(1000deg)'}),
      style({transform: 'rotate(0deg)'}),
    ])))])]
})
export class FortuneComponent {
  image: string;
  imageName: string;
  host: string;
  allImages = fortunes;

  constructor(private router: Router, route: ActivatedRoute) {
    this.host = window.location.host;
    this.randomImage();

    route.queryParams.subscribe((params) => {
      this.imageName = params['fortune'];
      if (this.allImages.indexOf(this.imageName) !== -1) {
        this.image = `url(/assets/images/${this.imageName})`;
      } else {
        this.newFortune();
      }
    });
  }

  newFortune() {
    this.router.navigate([''], {queryParams: {}});
    this.randomImage();
  }

  private randomImage() {
    const randomIndex = Math.floor((Math.random() * this.allImages.length));
    this.imageName = this.allImages[randomIndex];
    this.image = `url(/assets/images/${this.imageName})`;
  }
}
