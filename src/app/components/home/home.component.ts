import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const textElement = document.querySelector('.typing-text') as HTMLElement;
    const phrases = [" Saswat Kumar Sahoo ", " Java Developer ", " Microservices Expert ", " Spring Boot Specialist ", " Full Stack Engineer "];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      const displayedText = isDeleting ? currentPhrase.substring(0, charIndex--) : currentPhrase.substring(0, charIndex++);
      textElement.innerText = displayedText;

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        speed = 100; // Speed when deleting
        setTimeout(type, 1000); // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
        speed = 150; // Speed when typing
        setTimeout(type, 500); // Wait before typing new phrase
      } else {
        setTimeout(type, speed);
      }
    }

    type();
  }
}
