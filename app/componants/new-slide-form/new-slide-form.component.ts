import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-new-slide-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-slide-form.component.html',
  styleUrl: './new-slide-form.component.scss'
})
export class NewSlideFormComponent {
  // Declaring the FormGroup variable for the form
  slideForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private carouselService: CarouselService) { }

  ngOnInit(): void {
    // Call the initForm method when the component initializes
    this.initForm();
  }

  initForm() {
    // Initialize the form with form controls and their validators
    this.slideForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
      caption: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.slideForm);
    // Check if the form is valid
    if (this.slideForm.valid) {
      this.carouselService.addSlide(this.slideForm.value);
      console.log(this.carouselService);
    }
    // Reset the form after submission
    this.slideForm.reset();
  }
}
