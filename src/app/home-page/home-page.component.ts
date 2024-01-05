import { Component } from '@angular/core';
import { AppBannerComponent } from '../app-banner/app-banner.component';
import { MottoTopComponent } from '../motto-top/motto-top.component';
import { MottoBottomComponent } from '../motto-bottom/motto-bottom.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AppBannerComponent, MottoTopComponent, MottoBottomComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
