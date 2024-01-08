import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-services-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './services-item.component.html',
  styleUrl: './services-item.component.scss'
})
export class ServicesItemComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
}
