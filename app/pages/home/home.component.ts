import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../componants/carousel/carousel.component';
import { NewSlideFormComponent } from "../../componants/new-slide-form/new-slide-form.component";
import { CarouselService } from '../../services/carousel.service';
import { Carousel } from '../../models/carousel.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent, NewSlideFormComponent,MatIconModule]
})
export class HomeComponent implements OnInit{
  // Define an array to hold carousel slides
  slides!: Carousel[];

  // Constructor to inject CarouselService
  constructor(private carouselService: CarouselService) {}
  ngOnInit(): void {
    this.slides = this.carouselService.CarouselList;
  }
  
  // Method to delete a slide by its index
  DeleteSlide(index: number): void {
    this.carouselService.DeleteSlide(index);
  }
}
