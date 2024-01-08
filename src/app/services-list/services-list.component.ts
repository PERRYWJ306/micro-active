import { Component } from '@angular/core';
import { ServicesItemComponent } from '../services-item/services-item.component';
import { SERVICES_LIST } from '../services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [ServicesItemComponent],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
  services = SERVICES_LIST;
}
