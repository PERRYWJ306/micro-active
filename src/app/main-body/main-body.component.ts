import { Component } from '@angular/core';
import { SERVICES_LIST } from '../services.data';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {
  services = SERVICES_LIST;
}
