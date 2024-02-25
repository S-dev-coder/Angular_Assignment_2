import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  // Array to hold carousel slides
  CarouselList: Carousel[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Slide 1"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Slide 2"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1581782615834-1a0706be94c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Slide 3"
    },
  ];

  constructor() { }

  // Method to add a new slide to the carousel
  addSlide(newSlide: Carousel) {
    this.CarouselList.push(newSlide);
  }

  // Method to delete a slide from the carousel by its index
  DeleteSlide(index: number) {
    if (index >= 0 && index < this.CarouselList.length) {
      this.CarouselList.splice(index, 1);
    }
  }
}
