import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio-website';

  // ✅ This method fixes the error
  getAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
