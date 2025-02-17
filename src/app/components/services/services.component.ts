import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  standalone: true,
  styleUrl: './services.component.css'
})


export class ServicesComponent {

  services = [
    {
      icon: 'assets/icons/search-doctor.png',
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
      icon: 'assets/icons/online-pharmacy.png',
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system'
    },
    {
      icon: 'assets/icons/consultation.png',
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      icon: 'assets/icons/details-info.png',
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations'
    },
    {
      icon: 'assets/icons/emergency-care.png',
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
      icon: 'assets/icons/tracking.png',
      title: 'Tracking',
      description: 'Track and save your medical history and health data'
    }
  ];

}
