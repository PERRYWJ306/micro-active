import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motto-top',
  standalone: true,
  imports: [],
  templateUrl: './motto-top.component.html',
  styleUrl: './motto-top.component.scss'
})
export class MottoTopComponent {
  constructor(private router: Router) {}
  contactUs() {
    this.router.navigate(['/contact-us']);
  }
}
