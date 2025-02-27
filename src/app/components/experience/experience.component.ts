import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Tetrahedron Software Solutions',
      role: 'Full Stack Java Developer',
      duration: 'June 2024 - Present',
      description: '• Implemented JWT authentication for security.\n' +
                   '• Developed Angular-based UI for seamless user experience.\n' +
                   '• Integrated Kafka for microservices communication.',
      link: 'https://tetrasoftsolutions.com/',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'JWT']
    },
    {
      company: 'Vsoft Technologies Pvt. Ltd',
      role: 'Backend Java Developer',
      duration: 'January 2023 - May 2024',
      description: '• Developed state-wide underwriting model in Java.\n' +
                   '• Built Angular components for a core banking system.\n' +
                   '• Designed scalable database structure for insurance product.',
      link: 'https://www.vsoft.co.in/',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Microservices']
    }
  ];

  showPopup = false;
  selectedExperience: any = null;

  openExperiencePopup(exp: any) {
    this.selectedExperience = exp;
    this.showPopup = true;
  }
}
