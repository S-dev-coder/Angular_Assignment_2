import { Component } from '@angular/core';
import { Carousel } from '../../models/carousel.interface';
import { CarouselService } from '../../services/carousel.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  constructor(private carouselService: CarouselService) { }

  slides: Carousel[] = this.carouselService.CarouselList; 

  activeSlideIndex = 0;

  // Navigate to the previous slide
  NavigateBackward() {
    console.log(this.slides); 

    // If the active slide is the first slide, navigate to the last slide
    if (this.activeSlideIndex === 0) {
      this.activeSlideIndex = this.slides.length - 1;
    } else {
      // Otherwise, navigate to the previous slide
      this.activeSlideIndex--;
    }
  }

  // Navigate to the next slide
  NavigateForward() {
    // If the active slide is the last slide, navigate to the first slide
    if (this.activeSlideIndex === this.slides.length - 1) {
      this.activeSlideIndex = 0;
    } else {
      // Otherwise, navigate to the next slide
      this.activeSlideIndex++;
    }
  }
}
