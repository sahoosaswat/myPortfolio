import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Java', description: 'Core Java, Collections, Streams, Multithreading, and Functional Programming.', flipped: false },
    { name: 'Spring Boot', description: 'Building RESTful APIs, Dependency Injection, and Service Layer Architecture.', flipped: false },
    { name: 'Microservices', description: 'Developing scalable microservices using Spring Cloud, Eureka, and Feign Clients.', flipped: false },
    { name: 'Hibernate', description: 'ORM mapping, JPA, Lazy & Eager Loading, and Entity Relationships.', flipped: false },
    { name: 'RESTful APIs', description: 'Designing and consuming REST APIs with proper HTTP methods and security.', flipped: false },
    { name: 'Spring Security', description: 'Implementing authentication, JWT, OAuth2, and role-based authorization.', flipped: false },
    { name: 'HTML & CSS', description: 'Building responsive UI using HTML5, CSS3, and Bootstrap.', flipped: false },
    { name: 'JavaScript', description: 'Working with ES6+ features, promises, async/await, and event handling.', flipped: false },
    { name: 'Angular', description: 'Component-based UI development, services, forms, and state management.', flipped: false },
    { name: 'Docker', description: 'Containerizing applications and managing images with Docker Compose.', flipped: false },
    { name: 'Jenkins', description: 'Setting up CI/CD pipelines for automated deployment and testing.', flipped: false },
    { name: 'Kubernetes', description: 'Orchestrating containerized applications with pods and services.', flipped: false },
    { name: 'Eureka', description: 'Service registry for microservices to enable dynamic discovery.', flipped: false },
    { name: 'Kafka', description: 'Event-driven architecture using Kafka for message streaming.', flipped: false },
    { name: 'Agile & Scrum', description: 'Practicing Agile methodologies with Sprint Planning & Retrospectives.', flipped: false },
    { name: 'JUnit', description: 'Unit testing Java applications using JUnit and Mockito.', flipped: false }
  ];

  showPopup = false;
  selectedSkill: any = null;

  ngOnInit(): void {
    this.startRandomFlipping();
  }

  openSkillPopup(skill: any) {
    this.selectedSkill = skill;
    this.showPopup = true;
  }

  startRandomFlipping() {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.skills.length);
      this.skills[randomIndex].flipped = !this.skills[randomIndex].flipped;
    }, 2000); // Every 2 seconds, a random card flips
  }
}
