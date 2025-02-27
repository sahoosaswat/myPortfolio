import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'experience', component: ExperienceComponent, data: { animation: 'ExperiencePage' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
