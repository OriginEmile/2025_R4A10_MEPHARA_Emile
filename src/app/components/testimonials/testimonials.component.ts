import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  standalone: true,
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      image: 'assets/testimonials/lego_3.jpg',
      name: 'Edward Newgate',
      role: 'Founder Circle',
      message: '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely."'
    },
    {
      image: 'assets/testimonials/lego_2.jpg',
      name: 'Sarah Thompson',
      role: 'Marketing Manager',
      message: '"This platform has completely changed the way I manage my health. The consultations are seamless and easy to schedule."'
    },
    {
      image: 'assets/testimonials/lego_1.jpg',
      name: 'James Anderson',
      role: 'Software Engineer',
      message: '"I love the simplicity and effectiveness of this service. The doctors are top-notch, and the process is incredibly efficient."'
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
  }
}
