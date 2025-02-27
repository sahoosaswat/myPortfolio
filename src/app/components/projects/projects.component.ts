import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { name: 'TetraEDU', description: 'Education platform for NEET & JEE.', link: 'https://tetraedu.com' },
    { name: 'Other Project', description: 'Description of another project.', link: '#' }
  ];
}
