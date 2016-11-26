import { Component, OnInit, trigger, style, transition, animate, keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fortunes } from './fortunes.ts';

@Component({
  selector: 'fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.css'],
  animations: [
    trigger('imageAnimation', [
      transition('* => *',
        animate(1000, keyframes([
          style({transform: 'rotate(0deg)'}),
          style({transform: 'rotate(1000deg)'}),
          style({transform: 'rotate(0deg)'}),
        ]))
      )
    ])
  ]
})
export class FortuneComponent {
  image: string;
  allImages = fortunes;

  constructor(private router: Router, route: ActivatedRoute) {

    route.queryParams.subscribe((params) => {
      const imageName = params['fortune'];
      if (this.allImages.indexOf(imageName) !== -1) {
        this.image = `url(/assets/images/${imageName})`;
      } else {
        this.randomImage();
      }
    });
  }

  randomImage() {
    const randomIndex = Math.floor((Math.random() * this.allImages.length));
    const imageName = this.allImages[randomIndex];
    this.navigateToImage(imageName);
    this.image = `url(/assets/images/${imageName})`;
  }

  navigateToImage(imageName) {
    this.router.navigate([''], {queryParams: {'fortune': imageName}});
  }
}
