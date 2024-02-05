import { Component } from '@angular/core';
import { SERVICES_LIST } from '../services.data';
import { Services } from '../services.type';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ServiceModalComponent } from '../service-modal/service-modal.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {
  services = SERVICES_LIST;

  constructor(private dialog: MatDialog) {
  }

  onServiceClicked(service: Services) {
    console.log('Service clicked', service);
    this.openServiceModal(service);
  }

  openServiceModal(service: Services) {
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      data: service
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The services dialog was closed');
      //if (result instanceof Campaign) {
        // if (result.id !== undefined) {
        //   this.store.dispatch(updateCampaign({payload: result}));
        // } else {
        //   this.store.dispatch(createCampaign({payload: result}));
        // }
      //}
    });
  }  
}
