import { Component } from '@angular/core';
import { SKILLS_LIST } from '../skills.data';
import { SkillsItemComponent } from '../skills-item/skills-item.component';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [SkillsItemComponent],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent {
  skills = SKILLS_LIST
}
