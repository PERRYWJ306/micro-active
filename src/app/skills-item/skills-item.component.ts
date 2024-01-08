import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-skills-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.scss'
})
export class SkillsItemComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
}
