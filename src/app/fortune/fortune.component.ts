import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.css']
})
export class FortuneComponent {
  title = 'Is Adrian Going?';
  image: string;
  allImages = ['1000', 'bus', 'carfixed', 'down', 'dts', 'earliest', 'friend', 'harriet', 'inLA', 'kravmaga', 'nexttime', 'notbackintime', 'notsure', 'ohyah', 'outoftown', 'softmaybe', 'vivek', 'wenthome', 'whoknows', 'wildride', 'wrong'];

  constructor(private router: Router, route: ActivatedRoute) {

    route.queryParams.subscribe((params) => {
      const imageName = params['fortune'];
      if (this.allImages.includes(imageName)) {
        this.image = `url(/assets/images/${imageName}.png)`;
      } else {
        this.randomImage();
      }
    });
  }

  randomImage() {
    const randomIndex = Math.floor((Math.random() * this.allImages.length));
    const imageName = this.allImages[randomIndex];
    this.navigateToImage(imageName);
  }

  navigateToImage(imageName) {
    this.router.navigate([''], {queryParams: {'fortune': imageName}});
  }
}