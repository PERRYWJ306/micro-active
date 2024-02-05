import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Services } from '../services.type';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule    
  ],
  templateUrl: './service-modal.component.html',
  styleUrl: './service-modal.component.scss'
})
export class ServiceModalComponent {
  title = '';
  description = '';

  constructor(public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Services) {
    if (data !== null) {
      this.title = data.name;
      this.description = data.description;
    }  
  }  
}
